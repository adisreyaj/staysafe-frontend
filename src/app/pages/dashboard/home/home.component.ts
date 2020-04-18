/*
 * File: home.component.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:18:27 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 19th April 2020 1:08:22 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Observer } from 'rxjs';
import { map, mergeMapTo } from 'rxjs/operators';
import { AngularFireMessaging } from '@angular/fire/messaging';

import { QuickStatsData } from '@staysafe/components/quick-stats/quick-stats.component';
import { DataService } from 'src/app/common/services/data.service';
import { StorageService, BookmarkType } from '@staysafe/services/storage.service';
import { NewsArticle } from '@staysafe/interfaces/news.interface';
import { HeadingData } from '@staysafe/components/heading/heading.component';
import { CommunicationService } from '@staysafe/services/communication.service';
import { TrendsChart } from '@staysafe/interfaces/chart.interface';
import { ToggleService } from '@staysafe/services/toggle.service';
import { TableData, TableDataWithType } from '@staysafe/components/table/table.component';

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

  private bookmarkedDataSubject = new Subject<TableDataWithType>();
  private tableDataSubject = new Subject<TableDataWithType>();

  bookmarkedData$: Observable<TableDataWithType> = this.bookmarkedDataSubject.asObservable();
  tableData$: Observable<TableDataWithType> = this.tableDataSubject.asObservable();

  bookmarkedStatesList: TableData[] = [];
  bookmarkedCountriesList: TableData[] = [];
  statesList: TableData[] = [];
  countriesList: TableData[] = [];

  quickStatsHeading: HeadingData = {
    main: 'Quick Stats',
    sub: 'Last Update: 23mins ago',
  };
  statesTableHeading: HeadingData = {
    main: 'COVID - 19 Statistics',
    sub: `The coronavirus COVID-19 is affecting 209 countries and territories around the world and 2 international
      conveyances. The day is reset after midnight IST +530.`,
  };

  currentLocation = 'worlwide';
  constructor(
    private dataService: DataService,
    private storageService: StorageService,
    private afMessaging: AngularFireMessaging,
    private comunicationService: CommunicationService,
    private toggleService: ToggleService,
  ) {}

  ngOnInit(): void {
    this.getQuickStats();
    this.getWorldCountries();
    this.listenNotifications();
    this.getLatestNews();
    this.getDataForTrendsChart();
    this.checkIfNotificationTokenPresent();
    this.listenToLocationSwitcher();
  }

  listenToLocationSwitcher() {
    this.toggleService.mainSelection$.subscribe((data) => {
      if (data && this.currentLocation !== data) {
        this.currentLocation = data;
        if (data === 'india') {
          this.quickStats$ = this.dataService.getIndiaQuickStats();
          this.getIndiaStates();
          this.getBookmarkedStates();
        } else {
          this.quickStats$ = this.dataService.getWorldQuickStats();
          this.getWorldCountries();
          this.getBookmarkedCountries();
        }
      }
    });
  }

  checkIfNotificationTokenPresent() {
    this.afMessaging.getToken.subscribe((token) => {
      this.isNotificationBannerVisible = false;
    });
  }

  enableNotification() {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(this.notificationTokenObserver);
  }

  // TODO: Needs refactoring
  bookmarkChanged({ code, type }: { code: string; type: BookmarkType }) {
    if (code && type) {
      switch (type) {
        case BookmarkType.state:
          const state = [...this.bookmarkedStatesList].find((item) => item.code === code);
          if (state) this.bookmarkedStatesList = [...this.bookmarkedStatesList].filter((item) => item.code !== code);
          else
            this.bookmarkedStatesList = [
              ...this.bookmarkedStatesList,
              [...this.statesList].find((state) => state.code === code),
            ];
          this.bookmarkedDataSubject.next({ data: this.bookmarkedStatesList, type });
          this.statesList = [...this.statesList].map((state) => {
            if (state.code === code) state.bookmarked = !state.bookmarked;
            return state;
          });

          this.tableDataSubject.next({ data: this.statesList, type });
          break;
        case BookmarkType.country:
          const country = [...this.bookmarkedCountriesList].find((item) => item.code === code);
          if (country)
            this.bookmarkedCountriesList = [...this.bookmarkedCountriesList].filter((item) => item.code !== code);
          else
            this.bookmarkedCountriesList = [
              ...this.bookmarkedCountriesList,
              [...this.countriesList].find((country) => country.code === code),
            ];
          this.bookmarkedDataSubject.next({ data: this.bookmarkedCountriesList, type });
          this.countriesList = [...this.countriesList].map((country) => {
            if (country.code === code) country.bookmarked = !country.bookmarked;
            return country;
          });

          this.tableDataSubject.next({ data: this.countriesList, type });
          break;

        default:
          break;
      }
    }
  }

  private getQuickStats() {
    this.quickStats$ = this.dataService.getWorldQuickStats();
  }

  private getBookmarkedStates() {
    const bookmarked = this.storageService.getBookmarkedData(BookmarkType.state) || [];
    this.dataService
      .getIndiaStatesDataForTable()
      .pipe(
        map((states) => {
          return states.filter((state) => bookmarked.includes(state.code));
        }),
        map((states) => {
          this.bookmarkedStatesList = states;
          return this.addBookmarkStatusToData(states, BookmarkType.state);
        }),
      )
      .subscribe((data) => this.bookmarkedDataSubject.next({ data, type: BookmarkType.state }));
  }
  private getBookmarkedCountries() {
    const bookmarked = this.storageService.getBookmarkedData(BookmarkType.country) || [];
    this.dataService
      .getCountryDataForTable()
      .pipe(
        map((countries) => {
          return countries.filter((country) => bookmarked.includes(country.code));
        }),
        map((countries) => {
          this.bookmarkedCountriesList = countries;
          return this.addBookmarkStatusToData(countries, BookmarkType.country);
        }),
      )
      .subscribe((data) => this.bookmarkedDataSubject.next({ data, type: BookmarkType.country }));
  }

  private getIndiaStates() {
    this.dataService
      .getIndiaStatesDataForTable()
      .pipe(
        map((states) => {
          return this.addBookmarkStatusToData(states, BookmarkType.state);
        }),
      )
      .subscribe((data) => {
        this.tableDataSubject.next({ data, type: BookmarkType.state });
        this.statesList = data;
      });
  }

  private getWorldCountries() {
    this.dataService
      .getCountryDataForTable()
      .pipe(
        map((countries) => {
          return this.addBookmarkStatusToData(countries, BookmarkType.country);
        }),
      )
      .subscribe((data) => {
        this.tableDataSubject.next({ data, type: BookmarkType.country });
        this.countriesList = data;
      });
  }

  private getLatestNews() {
    this.topNews$ = this.dataService.getIndiaNews(10);
  }
  private addBookmarkStatusToData(data: TableData[], type: BookmarkType) {
    return data.map((state) => {
      const bookmarked = this.storageService.checkIfBookmarked(state.code, type);
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
