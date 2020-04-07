/*
 * File: quick-stats.component.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 11:15:44 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 7th April 2020 11:48:13 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-quick-stats',
  templateUrl: './quick-stats.component.html',
  styleUrls: ['./quick-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickStatsComponent implements OnInit {
  @Input() quickStats = [
    {
      label: 'Total Cases',
      value: 2500,
      delta: '+25',
    },
    {
      label: 'Active Cases',
      value: 1260,
      delta: '',
    },
    {
      label: 'Critical Cases',
      value: 1856,
      delta: '+19',
    },
    {
      label: 'Recovered Cases',
      value: 3624,
      delta: '+105',
    },
    {
      label: 'Deceased Cases',
      value: 2500,
      delta: '+25',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
