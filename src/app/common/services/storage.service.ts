/*
 * File: storage.service.ts
 * Project: staysafe-frontend
 * File Created: Thursday, 9th April 2020 8:27:38 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 9th April 2020 9:43:42 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  addBookmark(stateCode: string) {
    let newArray;
    const db = this.getBookmarkDB();
    if (db) {
      if (db.includes(stateCode)) newArray = db.filter((item) => item !== stateCode);
      else newArray = [...db, stateCode];
    } else {
      newArray = [stateCode];
    }
    localStorage.setItem('bookmark', JSON.stringify(newArray));
  }

  getBookmarkedIndianStatesData() {
    return this.getBookmarkDB();
  }

  removeItemFromBookmark(stateCode: string) {
    const db = this.getBookmarkDB();
    if (db) {
      const bookmarked = JSON.parse(db);
      if (bookmarked.length > 0)
        localStorage.setItem('bookmark', JSON.stringify(bookmarked.filter((item) => item !== stateCode)));
    }
  }

  getBookmarkDB() {
    const existing = localStorage.getItem('bookmark');
    return existing ? JSON.parse(existing) : undefined;
  }

  checkIfBookmarked(stateCode: string) {
    const db = this.getBookmarkDB();
    return db ? db.includes(stateCode) : false;
  }
}
