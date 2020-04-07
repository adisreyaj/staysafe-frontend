/*
 * File: button-group.component.ts
 * Project: staysafe-frontend
 * File Created: Wednesday, 8th April 2020 12:26:36 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 8th April 2020 12:37:10 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
})
export class ButtonGroupComponent implements OnInit {
  @Input() buttons = [
    {
      label: 'India',
      link: '/',
    },
    {
      label: 'Worldwide',
      link: '/world',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
