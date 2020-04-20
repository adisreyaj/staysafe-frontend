/*
 * File: prevention.component.ts
 * Project: staysafe-frontend
 * File Created: Saturday, 11th April 2020 7:46:21 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 11th April 2020 7:46:44 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */


import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-prevention',
  templateUrl: './prevention.component.html',
  styleUrls: ['./prevention.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreventionComponent implements OnInit {
  @Input() data;
  constructor() {}

  ngOnInit(): void {}
}
