/*
 * File: notification-banner.component.ts
 * Project: staysafe-frontend
 * File Created: Friday, 10th April 2020 12:31:47 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 10th April 2020 7:23:47 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-notification-banner',
  templateUrl: './notification-banner.component.html',
  styleUrls: ['./notification-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationBannerComponent implements OnInit {
  @Output() enableClicked = new EventEmitter();
  @Input() visible = true;
  constructor() {}

  ngOnInit(): void {}

  enableNotification() {
    this.enableClicked.emit();
  }
}
