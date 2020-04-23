/*
 * File: preference-modal.component.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 21st April 2020 1:10:49 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 24th April 2020 12:08:29 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMap, mergeMapTo } from 'rxjs/operators';

import { SlideToggle } from '../slide-toggle/slide-toggle.component';
import { PreferenceModalService } from './preference-modal.service';
import { CommunicationService } from '@staysafe/services/communication.service';
import { Observer } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './preference-modal.component.html',
  styleUrls: ['./preference-modal.component.scss'],
})
export class PreferenceModalComponent implements OnInit {
  pushNotificationEnabled = false;
  preferenceForm: { countryCode: FormControl; phone: FormControl };
  constructor(
    private modalService: PreferenceModalService,
    private router: Router,
    private comunicationService: CommunicationService,
    private afMessaging: AngularFireMessaging,
  ) {}

  ngOnInit(): void {
    this.preferenceForm = {
      countryCode: new FormControl('', [Validators.pattern(/([+]?\d){1,5}/)]),
      phone: new FormControl('', [Validators.pattern(/[0-9]{6,12}/), Validators.maxLength(12)]),
    };

    this.preferenceForm.phone.valueChanges.subscribe((data) => console.log(data));
  }

  closeModal() {
    this.modalService.closeModal();
  }
  goBackHome() {
    this.router.navigate(['/']);
  }

  saveSubscriptionDetails() {
    if (this.preferenceForm.countryCode.valid && this.preferenceForm.phone.valid) {
      const phoneWithCountryCode = `${this.preferenceForm.countryCode.value}${this.preferenceForm.phone.value}`;
      this.comunicationService.registerPhoneNumberForSMSNotifications(phoneWithCountryCode).subscribe((data) => {
        this.closeModal();
      });
    }
  }

  listenToSlideToggle({ type, status }: SlideToggle) {
    switch (type) {
      case 'push':
        if (!status) this.deleteToken();
        else this.enableNotification();
        break;
      default:
        break;
    }
  }

  private checkIfNotificationTokenPresent() {
    this.afMessaging.getToken.subscribe((token) => {
      this.pushNotificationEnabled = token ? false : true;
    });
  }

  //TODO: Refactor this to a separate shared service
  private deleteToken() {
    this.afMessaging.getToken.pipe(mergeMap((token) => this.afMessaging.deleteToken(token))).subscribe((token) => {
      console.log('Token deleted!');
    });
  }

  private enableNotification() {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(this.notificationTokenObserver);
  }

  private notificationTokenObserver: Observer<string> = {
    next: (token) => this.saveNotificationKey(token),
    error: () => {},
    complete: () => {},
  };

  private saveNotificationKey(token) {
    this.comunicationService.savePushToken(token).subscribe(
      () => {
        this.pushNotificationEnabled = true;
      },
      () => {},
    );
  }
}
