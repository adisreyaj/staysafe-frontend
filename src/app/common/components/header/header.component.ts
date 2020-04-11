/*
 * File: header.component.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:15:47 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 11th April 2020 10:52:17 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  isMobileMenuVisible = false;
  constructor() {}

  ngOnInit(): void {}

  toggleMobileMenu() {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }

  closeMenu() {
    this.isMobileMenuVisible = false;
  }
}
