/*
 * File: storage.service.ts
 * Project: staysafe-frontend
 * File Created: Thursday, 9th April 2020 8:27:38 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 18th April 2020 12:48:06 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Injectable } from '@angular/core';

export enum BookmarkType {
  state = 'STATE',
  country = 'COUNTRY',
}
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  addBookmark({ code, type }: { code: string; type: BookmarkType }) {
    let newArray;
    const db = this.getBookmarkDB(type);
    if (db) {
      if (db.includes(code)) newArray = db.filter((item) => item !== code);
      else newArray = [...db, code];
    } else {
      newArray = [code];
    }
    const dataToSave = JSON.stringify(newArray);
    this.saveToStorageBasedOnType(type, dataToSave);
  }

  getBookmarkedData(type: BookmarkType) {
    return this.getBookmarkDB(type);
  }

  removeItemFromBookmark(code: string, type: BookmarkType) {
    const db = this.getBookmarkDB(type);
    if (db) {
      const bookmarked = JSON.parse(db);
      if (bookmarked.length > 0) {
        const dataToSave = JSON.stringify(bookmarked.filter((item) => item !== code));
        this.saveToStorageBasedOnType(type, dataToSave);
      }
    }
  }

  getBookmarkDB(type: BookmarkType) {
    const existing =
      type === BookmarkType.country ? localStorage.getItem('bookmark_country') : localStorage.getItem('bookmark_state');
    return existing ? JSON.parse(existing) : undefined;
  }

  checkIfBookmarked(code: string, type: BookmarkType) {
    const db = this.getBookmarkDB(type);
    return db ? db.includes(code) : false;
  }

  saveToStorageBasedOnType(type: BookmarkType, data: string) {
    switch (type) {
      case BookmarkType.country:
        localStorage.setItem('bookmark_country', data);
        break;

      case BookmarkType.state:
        localStorage.setItem('bookmark_state', data);
        break;

      default:
        break;
    }
  }
}
