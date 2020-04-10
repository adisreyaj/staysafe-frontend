/*
 * File: home.component.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:18:27 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 10th April 2020 9:21:53 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Observer } from 'rxjs';
import { map, mergeMapTo } from 'rxjs/operators';
import { AngularFireMessaging } from '@angular/fire/messaging';

import { QuickStatsData, QuickInsightLabels } from '@staysafe/components/quick-stats/quick-stats.component';
import { DataService } from 'src/app/common/services/data.service';
import { StateData } from '@staysafe/interfaces/india.interface';
import { StorageService } from '@staysafe/services/storage.service';
import { NewsArticle } from '@staysafe/interfaces/news.interface';
import { HeadingData } from '@staysafe/components/heading/heading.component';
import { CommunicationService } from '@staysafe/services/communication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isNotificationBannerVisible = true;

  quickStats$: Observable<QuickStatsData[]>;
  topNews$: Observable<NewsArticle[]>;

  private bookmarkedStatesSubject = new Subject<StateData[]>();
  private indiaStatesSubject = new Subject<StateData[]>();

  bookmarkedStates$: Observable<StateData[]> = this.bookmarkedStatesSubject.asObservable();
  indiaStates$: Observable<StateData[]> = this.indiaStatesSubject.asObservable();

  bookmarkedList: StateData[] = [];
  statesList: StateData[] = [];

  quickStatsHeading: HeadingData = {
    main: 'Quick Stats',
    sub: 'Last Update: 23mins ago',
  };
  constructor(
    private dataService: DataService,
    private storageService: StorageService,
    private afMessaging: AngularFireMessaging,
    private comunicationService: CommunicationService,
  ) {}

  ngOnInit(): void {
    this.getQuickStats();
    this.getIndiaStates();
    this.getBookmarkedStates();
    this.listenNotifications();
    this.getLatestNews();
  }

  enableNotification() {
    console.log('🔔 Enabling Noitifations');
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(this.notificationObserver);
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
      }),
    );
  }

  private getBookmarkedStates() {
    const bookmarked = this.storageService.getBookmarkedIndianStatesData() || [];
    this.dataService
      .getIndiaStatesData()
      .pipe(
        map((states) => {
          return states.filter((state) => bookmarked.includes(state.statecode));
        }),
        map((states) => {
          this.bookmarkedList = states;
          return this.addBookmarkStatusToData(states);
        }),
      )
      .subscribe((data) => this.bookmarkedStatesSubject.next(data));
  }

  private getIndiaStates() {
    this.dataService
      .getIndiaStatesData()
      .pipe(
        map((states) => {
          return this.addBookmarkStatusToData(states);
        }),
      )
      .subscribe((data) => {
        this.indiaStatesSubject.next(data);
        this.statesList = data;
      });
  }

  private getLatestNews() {
    this.topNews$ = this.dataService.getIndiaNews(10);
  }
  private addBookmarkStatusToData(states: StateData[]) {
    return states.map((state) => {
      const bookmarked = this.storageService.checkIfBookmarked(state.statecode);
      Object.assign(state, {
        bookmarked,
      });
      return state;
    });
  }

  notificationObserver: Observer<string> = {
    next: (token) => this.saveNotificationKey(token),
    error: (err) => this.handleNotificationSaveError(err),
    complete: () => {},
  };

  private saveNotificationKey(token) {
    this.comunicationService.savePushToken(token).subscribe(
      () => {
        this.isNotificationBannerVisible = false;
      },
      () => {},
    );
  }

  private listenNotifications() {
    this.afMessaging.messages.subscribe((messaging: any) => {
      messaging._next = (payload: any) => {
        console.log(payload);
      };
    });
  }

  private handleNotificationSaveError(err: any) {
    this.isNotificationBannerVisible = false;
  }
}
