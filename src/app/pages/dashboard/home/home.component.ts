/*
 * File: home.component.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:18:27 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 8th April 2020 10:58:37 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuickStatsData, QuickInsightLabels } from 'src/app/common/components/quick-stats/quick-stats.component';
import { DataService } from 'src/app/common/services/data.service';
import { StateData } from '../../../common/interfaces/india.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quickStats$: Observable<QuickStatsData[]>;
  indiaStates$: Observable<StateData[]>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getQuickStats();
    this.getIndiaStates();
  }

  getQuickStats() {
    this.quickStats$ = this.dataService.getWorldQuickStats().pipe(
      map((data) => {
        return [
          {
            label: QuickInsightLabels.total,
            value: data.cases.total,
            delta: data.cases.new,
          },
          {
            label: QuickInsightLabels.active,
            value: data.cases.active,
            delta: 'N/A',
          },
          {
            label: QuickInsightLabels.critical,
            value: data.cases.critical,
            delta: 'N/A',
          },
          {
            label: QuickInsightLabels.recovered,
            value: data.cases.recovered,
            delta: 'N/A',
          },
          {
            label: QuickInsightLabels.deceased,
            value: data.deaths.total,
            delta: data.deaths.new,
          },
        ];
      })
    );
  }

  getIndiaStates() {
    this.indiaStates$ = this.dataService.getIndiaStatesData();
  }
}
