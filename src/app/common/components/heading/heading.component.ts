/*
 * File: heading.component.ts
 * Project: staysafe-frontend
 * File Created: Wednesday, 8th April 2020 11:13:15 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 8th April 2020 11:14:26 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input } from '@angular/core';

export interface HeadingData {
  main: string;
  sub: string;
}

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent implements OnInit {
  @Input() data: HeadingData;
  constructor() {}

  ngOnInit(): void {}
}
