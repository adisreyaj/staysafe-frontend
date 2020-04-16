/*
 * File: home.component.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:18:27 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 16th April 2020 11:23:59 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Observer } from 'rxjs';
import { map, mergeMapTo } from 'rxjs/operators';
import { AngularFireMessaging } from '@angular/fire/messaging';

import { QuickStatsData } from '@staysafe/components/quick-stats/quick-stats.component';
import { DataService } from 'src/app/common/services/data.service';
import { StateData } from '@staysafe/interfaces/india.interface';
import { StorageService } from '@staysafe/services/storage.service';
import { NewsArticle } from '@staysafe/interfaces/news.interface';
import { HeadingData } from '@staysafe/components/heading/heading.component';
import { CommunicationService } from '@staysafe/services/communication.service';
import { TrendsChart } from '@staysafe/interfaces/chart.interface';
import { ToggleService } from '@staysafe/services/toggle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isNotificationBannerVisible = true;

  quickStats$: Observable<QuickStatsData[]>;
  topNews$: Observable<NewsArticle[]>;
  chartData$: Observable<TrendsChart>;

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
  statesTableHeading: HeadingData = {
    main: 'COVID - 19 Statistics',
    sub: `The coronavirus COVID-19 is affecting 209 countries and territories around the world and 2 international
      conveyances. The day is reset after midnight IST +530.`,
  };

  currentLocation = 'india';
  constructor(
    private dataService: DataService,
    private storageService: StorageService,
    private afMessaging: AngularFireMessaging,
    private comunicationService: CommunicationService,
    private toggleService: ToggleService,
  ) {}

  ngOnInit(): void {
    this.getQuickStats();
    this.getIndiaStates();
    this.getBookmarkedStates();
    this.listenNotifications();
    this.getLatestNews();
    this.getDataForTrendsChart();
    this.checkIfNotificationTokenPresent();
    this.listenToLocationSwitcher();
    this.quickStats$ = this.dataService.getWorldQuickStats();
  }

  listenToLocationSwitcher() {
    this.toggleService.mainSelection$.subscribe((data) => {
      if (this.currentLocation !== data) {
        this.currentLocation = data;
        if (data === 'india') this.quickStats$ = this.dataService.getIndiaQuickStats();
        else this.quickStats$ = this.dataService.getWorldQuickStats();
      }
    });
  }

  checkIfNotificationTokenPresent() {
    this.afMessaging.getToken.subscribe((token) => {
      console.log({ token });
      this.isNotificationBannerVisible = false;
    });
  }

  enableNotification() {
    console.log('🔔 Enabling Noitifations');
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(this.notificationTokenObserver);
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

    this.indiaStatesSubject.next(this.statesList);
  }

  private getQuickStats() {
    this.quickStats$ = this.dataService.getWorldQuickStats();
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

  private getDataForTrendsChart() {
    this.chartData$ = this.dataService.getIndiaChartData();
  }

  private saveNotificationKey(token) {
    this.comunicationService.savePushToken(token).subscribe(
      () => {
        this.isNotificationBannerVisible = false;
      },
      () => {},
    );
  }

  private listenNotifications() {
    this.afMessaging.onMessage(this.notificationMessageObserver);
  }

  private handleNotificationSaveError(err: any) {
    this.isNotificationBannerVisible = false;
  }

  private notificationTokenObserver: Observer<string> = {
    next: (token) => this.saveNotificationKey(token),
    error: (err) => this.handleNotificationSaveError(err),
    complete: () => {},
  };
  private notificationMessageObserver: Observer<string> = {
    next: (message) => console.log({ message }),
    error: (err) => this.handleNotificationSaveError(err),
    complete: () => {},
  };
}
