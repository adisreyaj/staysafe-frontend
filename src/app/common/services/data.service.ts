/*
 * File: data.service.ts
 * Project: staysafe-frontend
 * File Created: Wednesday, 8th April 2020 8:41:11 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 12th April 2020 6:30:22 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { StateData } from '../interfaces/india.interface';
import { WorldStats } from '../interfaces/world.interface';
import { News } from '../interfaces/news.interface';
import { QuickInsightLabels } from '@staysafe/components/quick-stats/quick-stats.component';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = `${environment.backend}/api/v1`;
  constructor(private http: HttpClient) {}

  getWorldQuickStats() {
    return this.http.get<WorldStats>(`${this.baseUrl}/world/stats`).pipe(
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
  getWorldCountryData() {
    return this.http.get(`${this.baseUrl}/world`);
  }

  getIndiaStatesData() {
    return this.http.get<StateData[]>(`${this.baseUrl}/india/states`);
  }

  getIndiaChartData() {
    return this.http.get('https://api.covid19india.org/data.json').pipe(
      map((data: any) => data.cases_time_series),
      map((data) => {
        const dates = data.map((item) => `${item.date}`);
        return {
          labels: dates,
          cumulative: [
            {
              title: 'Total Confirmed',
              data: data.map((item) => item.totalconfirmed),
            },
            {
              title: 'Total Recovered',
              data: data.map((item) => item.totalrecovered),
            },
            {
              title: 'Total Deceased',
              data: data.map((item) => item.totaldeceased),
            },
          ],
          daily: [
            {
              title: 'Daily Confirmed',
              data: data.map((item) => item.dailyconfirmed),
            },
            {
              title: 'Daily Recovered',
              data: data.map((item) => item.dailyrecovered),
            },
            {
              title: 'Daily Deceased',
              data: data.map((item) => item.dailydeceased),
            },
          ],
        };
      }),
    );
  }

  getIndiaNews(limit = 10) {
    return this.http.get<News>(`${this.baseUrl}/news/india/?limit=${limit}`).pipe(
      map((data) => data.articles),
      map((data) => data.filter((news) => news.content)),
    );
  }
}
