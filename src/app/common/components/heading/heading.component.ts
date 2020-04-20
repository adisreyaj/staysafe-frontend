/*
 * File: heading.component.ts
 * Project: staysafe-frontend
 * File Created: Wednesday, 8th April 2020 11:13:15 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 11th April 2020 1:30:48 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

export interface HeadingData {
  main: string;
  sub: string;
}

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadingComponent implements OnInit {
  @Input() data: HeadingData;
  constructor() {}

  ngOnInit(): void {}
}
