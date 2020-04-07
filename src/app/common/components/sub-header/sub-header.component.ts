/*
 * File: sub-header.component.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:16:00 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 7th April 2020 11:07:00 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent implements OnInit {
  contactInfo = [
    {
      label: 'Helpline Number',
      data: '+91-11-23978046',
    },
    {
      label: 'Toll Free',
      data: '1075',
    },
    {
      label: 'Helpline Email',
      data: 'ncov2019@gov.in',
    },
  ];

  selectedItemMobile = 0;
  constructor() {}

  ngOnInit(): void {}

  changeInfo() {
    const totalInfoItems = this.contactInfo.length;
    if (this.selectedItemMobile === totalInfoItems - 1) this.selectedItemMobile = 0;
    else this.selectedItemMobile = this.selectedItemMobile + 1;
  }
}
