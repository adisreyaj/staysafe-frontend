/*
 * File: quick-stats.component.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 11:15:44 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 8th April 2020 8:57:58 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

export interface QuickStatsData {
  label: QuickInsightLabels;
  value: number;
  delta?: string;
}

export enum QuickInsightLabels {
  total = 'Total Cases',
  active = 'Active Cases',
  critical = 'Critical Cases',
  recovered = 'Recovered Cases',
  deceased = 'Deceased Cases',
}
@Component({
  selector: 'app-quick-stats',
  templateUrl: './quick-stats.component.html',
  styleUrls: ['./quick-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickStatsComponent implements OnInit {
  @Input() quickStats: QuickStatsData[] = [];
  constructor() {}

  ngOnInit(): void {}
}
