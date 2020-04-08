/*
 * File: data.service.ts
 * Project: staysafe-frontend
 * File Created: Wednesday, 8th April 2020 8:41:11 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 8th April 2020 10:00:12 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { CountryData } from '../interfaces/country.interface';
import { Observable } from 'rxjs';
import { StateData } from '../interfaces/india.interface';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = `${environment.backend}/api/v1`;
  constructor(private http: HttpClient) {}

  getWorldQuickStats(): Observable<CountryData> {
    return this.http.get<CountryData[]>(`${this.baseUrl}/world?country=world`).pipe(map((item) => item[0]));
  }

  getIndiaStatesData() {
    return this.http.get<StateData[]>(`${this.baseUrl}/india/states`);
  }
}
