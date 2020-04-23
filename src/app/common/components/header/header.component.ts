/*
 * File: header.component.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:15:47 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 23rd April 2020 11:26:54 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ToggleService } from '@staysafe/services/toggle.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { PreferenceModalService } from '../preference-modal/preference-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  isMobileMenuVisible = false;
  isMobileLocationSwitcherVisible = false;
  locationToggleButtons = [
    {
      label: 'india',
      active: false,
    },
    {
      label: 'worldwide',
      active: true,
    },
  ];
  locationToggleButtonsSubject = new BehaviorSubject<any>(this.locationToggleButtons);
  locationToggleButtons$ = this.locationToggleButtonsSubject.asObservable();
  constructor(private toggleService: ToggleService, private modalService: PreferenceModalService) {}

  ngOnInit(): void {}

  toggleMobileMenu() {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }
  toggleLocationSwitcher() {
    this.isMobileLocationSwitcherVisible = !this.isMobileLocationSwitcherVisible;
  }

  locationSwitcher(type: string) {
    this.toggleService.toggleMainSelection(type);
    const activeStateChanged = [...this.locationToggleButtons].map((item) => {
      item.active = item.label === type ? true : false;
      return item;
    });
    this.locationToggleButtons = activeStateChanged;
    this.locationToggleButtonsSubject.next(activeStateChanged);
    this.isMobileLocationSwitcherVisible = false;
  }

  closeMenu() {
    this.isMobileMenuVisible = false;
  }

  openPreferenceModal() {
    this.modalService.openModal();
  }
}
