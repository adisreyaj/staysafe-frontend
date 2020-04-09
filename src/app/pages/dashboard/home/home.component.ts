/*
 * File: home.component.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:18:27 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 10th April 2020 12:34:11 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
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

  private bookmarkedStatesSubject = new Subject<StateData[]>();
  private indiaStatesSubject = new Subject<StateData[]>();

  bookmarkedStates$: Observable<StateData[]> = this.bookmarkedStatesSubject.asObservable();
  indiaStates$: Observable<StateData[]> = this.indiaStatesSubject.asObservable();

  bookmarkedList: StateData[] = [];
  statesList: StateData[] = [];
  constructor(private dataService: DataService, private storageService: StorageService) {}

  ngOnInit(): void {
    this.getQuickStats();
    this.getIndiaStates();
    this.getBookmarkedStates();
  }

  bookmarkChanged(stateCode: string) {
    const state = [...this.bookmarkedList].find((item) => item.statecode === stateCode);
    if (state) this.bookmarkedList = [...this.bookmarkedList].filter((item) => item.statecode !== stateCode);
    else
      this.bookmarkedList = [...this.bookmarkedList, [...this.statesList].find((item) => item.statecode === stateCode)];
    this.bookmarkedStatesSubject.next(this.bookmarkedList);
    this.statesList = [...this.statesList].map((state) => {
      if (state.statecode === stateCode) state.bookmarked = !state.bookmarked;
      return state;
    });
    console.log(this.statesList.find((item) => item.statecode === stateCode));
    this.indiaStatesSubject.next(this.statesList);
  }
  private getQuickStats() {
    this.quickStats$ = this.dataService.getWorldQuickStats().pipe(
      map((data) => {
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
    this.dataService
      .getIndiaStatesData()
      .pipe(
        map((states) => {
          return states.filter((state) => bookmarked.includes(state.statecode));
        }),
        map((states) => {
          this.bookmarkedList = states;
          return this.addBookmarkStatusToData(states);
        })
      )
      .subscribe((data) => this.bookmarkedStatesSubject.next(data));
  }

  private getIndiaStates() {
    this.dataService
      .getIndiaStatesData()
      .pipe(
        map((states) => {
          return this.addBookmarkStatusToData(states);
        })
      )
      .subscribe((data) => {
        this.indiaStatesSubject.next(data);
        this.statesList = data;
      });
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
