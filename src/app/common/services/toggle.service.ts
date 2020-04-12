/*
 * File: toggle.service.ts
 * Project: staysafe-frontend
 * File Created: Sunday, 12th April 2020 10:03:21 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 12th April 2020 10:46:41 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  currentMainSelection = 'india';

  private mainSelectionSubject = new BehaviorSubject(this.currentMainSelection);
  mainSelection$ = this.mainSelectionSubject.asObservable();
  constructor() {}

  toggleMainSelection(type: string) {
    this.currentMainSelection === type;
    this.mainSelectionSubject.next(type);
  }
}
