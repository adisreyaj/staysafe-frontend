/*
 * File: data.service.ts
 * Project: staysafe-frontend
 * File Created: Wednesday, 8th April 2020 8:41:11 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 17th April 2020 11:45:32 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '@staysafe/env/environment';
import { StateData, IndiaStats } from '@staysafe/interfaces/india.interface';
import { WorldStats } from '@staysafe/interfaces/world.interface';
import { News } from '@staysafe/interfaces/news.interface';
import { QuickInsightLabels } from '@staysafe/components/quick-stats/quick-stats.component';
import { TableData } from '@staysafe/components/table/table.component';
import { CountryData } from '@staysafe/interfaces/country.interface';
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

  getIndiaQuickStats() {
    return this.http.get<IndiaStats>(`${this.baseUrl}/india/stats`).pipe(
      map((data) => {
        if (data) {
          return [
            {
              label: QuickInsightLabels.total,
              value: +data.active,
              delta: `+${data.active}`,
            },
            {
              label: QuickInsightLabels.active,
              value: +data.confirmed,
              delta: `+${data.deltaconfirmed}`,
            },
            {
              label: QuickInsightLabels.recovered,
              value: +data.recovered,
              delta: `+${data.deltarecovered}`,
            },
            {
              label: QuickInsightLabels.deceased,
              value: +data.deaths,
              delta: `+${data.deltadeaths}`,
            },
          ];
        }
      }),
    );
  }

  getWorldCountryData() {
    return this.http.get<CountryData[]>(`${this.baseUrl}/world`);
  }

  getCountryDataForTable(): Observable<TableData[]> {
    return this.getWorldCountryData().pipe(
      map((data: CountryData[]) => {
        return data.map((country) => {
          const { cases, deaths, country: name, countryCode: code } = country;
          const tableData: TableData = {
            active: cases.active,
            code,
            deceased: deaths.total,
            name,
            recovered: cases.recovered,
            total: cases.total,
            bookmarked: false,
          };
          return tableData;
        });
      }),
    );
  }

  getIndiaStatesData() {
    return this.http.get<StateData[]>(`${this.baseUrl}/india/states`);
  }

  getIndiaStatesDataForTable(): Observable<TableData[]> {
    return this.getIndiaStatesData().pipe(
      map((data: StateData[]) => {
        return data.map((state) => {
          const { active, deaths: deceased, recovered, state: name, statecode: code, confirmed: total } = state;
          const tableData: TableData = {
            active: +active,
            code,
            deceased: +deceased,
            name,
            recovered: +recovered,
            total: +total,
            bookmarked: false,
          };
          return tableData;
        });
      }),
      shareReplay(1),
    );
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
