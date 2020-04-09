/*
 * File: data.service.ts
 * Project: staysafe-frontend
 * File Created: Wednesday, 8th April 2020 8:41:11 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 9th April 2020 10:38:30 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { StateData } from '../interfaces/india.interface';
import { WorldStats } from '../interfaces/world.interface';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = `${environment.backend}/api/v1`;
  constructor(private http: HttpClient) {}

  getWorldQuickStats(): Observable<WorldStats> {
    return this.http.get<WorldStats>(`${this.baseUrl}/world/stats`);
  }

  getIndiaStatesData() {
    return this.http.get<StateData[]>(`${this.baseUrl}/india/states`);
  }
}
