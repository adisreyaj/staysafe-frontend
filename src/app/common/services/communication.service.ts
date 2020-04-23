/*
 * File: communication.service.ts
 * Project: staysafe-frontend
 * File Created: Friday, 10th April 2020 7:45:39 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 24th April 2020 12:00:21 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@staysafe/env/environment';
@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  baseUrl = `${environment.backend}/api/v1`;
  constructor(private http: HttpClient) {}

  savePushToken(token: string) {
    return this.http.post(`${this.baseUrl}/com/push/token`, { token });
  }

  registerPhoneNumberForSMSNotifications(phone: string) {
    return this.http.post(`${this.baseUrl}/sms/register`, { phone });
  }
}
