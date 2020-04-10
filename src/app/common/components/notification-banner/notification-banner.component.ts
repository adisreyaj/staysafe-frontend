/*
 * File: notification-banner.component.ts
 * Project: staysafe-frontend
 * File Created: Friday, 10th April 2020 12:31:47 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 10th April 2020 8:28:37 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-notification-banner',
  templateUrl: './notification-banner.component.html',
  styleUrls: ['./notification-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationBannerComponent implements OnInit {
  @Output() enableClicked = new EventEmitter();
  @Input() visible = true;
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  enableNotification() {
    this.enableClicked.emit();
  }
  closeBanner() {
    this.visible = false;
    this.cd.detectChanges();
  }
}
