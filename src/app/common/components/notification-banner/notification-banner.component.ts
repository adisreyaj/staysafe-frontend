/*
 * File: notification-banner.component.ts
 * Project: staysafe-frontend
 * File Created: Friday, 10th April 2020 12:31:47 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 20th April 2020 11:24:30 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-notification-banner',
  templateUrl: './notification-banner.component.html',
  styleUrls: ['./notification-banner.component.scss'],
})
export class NotificationBannerComponent implements OnInit {
  @Output() enableClicked = new EventEmitter();
  @Input() visible = false;
  constructor() {}

  ngOnInit(): void {}

  enableNotification() {
    this.enableClicked.emit();
  }
  closeBanner() {
    this.visible = false;
  }
}
