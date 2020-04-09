/*
 * File: home.component.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:18:27 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 9th April 2020 10:39:47 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuickStatsData, QuickInsightLabels } from 'src/app/common/components/quick-stats/quick-stats.component';
import { DataService } from 'src/app/common/services/data.service';
import { StateData } from '../../../common/interfaces/india.interface';
import { StorageService } from '../../../common/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quickStats$: Observable<QuickStatsData[]>;
  indiaStates$: Observable<StateData[]>;
  bookmarkedStates$: Observable<StateData[]>;
  constructor(private dataService: DataService, private storageService: StorageService) {}

  ngOnInit(): void {
    this.getQuickStats();
    this.getIndiaStates();
    this.getBookmarkedStates();
  }

  bookmarkChanged() {
    this.getBookmarkedStates();
    this.getIndiaStates();
  }
  private getQuickStats() {
    this.quickStats$ = this.dataService.getWorldQuickStats().pipe(
      map((data) => {
        console.log({ data });

        if (data) {
          return [
            {
              label: QuickInsightLabels.total,
              value: data.cases,
              delta: `+${data.todayCases}`,
            },
            {
              label: QuickInsightLabels.active,
              value: data.active,
              delta: '+0',
            },
            {
              label: QuickInsightLabels.critical,
              value: data.critical,
              delta: '+0',
            },
            {
              label: QuickInsightLabels.recovered,
              value: data.recovered,
              delta: '+0',
            },
            {
              label: QuickInsightLabels.deceased,
              value: data.deaths,
              delta: `+${data.todayDeaths}`,
            },
          ];
        }
      })
    );
  }

  private getBookmarkedStates() {
    const bookmarked = this.storageService.getBookmarkedIndianStatesData();
    this.bookmarkedStates$ = this.dataService.getIndiaStatesData().pipe(
      map((states) => {
        return states.filter((state) => bookmarked.includes(state.statecode));
      }),
      map((states) => {
        return this.addBookmarkStatusToData(states);
      })
    );
  }

  private getIndiaStates() {
    this.indiaStates$ = this.dataService.getIndiaStatesData().pipe(
      map((states) => {
        return this.addBookmarkStatusToData(states);
      })
    );
  }

  addBookmarkStatusToData(states: StateData[]) {
    return states.map((state) => {
      const bookmarked = this.storageService.checkIfBookmarked(state.statecode);
      Object.assign(state, {
        bookmarked,
      });
      return state;
    });
  }
}
