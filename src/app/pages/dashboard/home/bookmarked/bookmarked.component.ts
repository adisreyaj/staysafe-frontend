/*
 * File: bookmarked.component.ts
 * Project: staysafe-frontend
 * File Created: Thursday, 9th April 2020 12:56:17 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 18th April 2020 1:14:46 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HeadingData } from '@staysafe/components/heading/heading.component';
import { StorageService, BookmarkType } from '@staysafe/services/storage.service';
import { TableDataWithType } from '@staysafe/components/table/table.component';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.scss'],
})
export class BookmarkedComponent implements OnInit {
  @Input() data: TableDataWithType;
  @Output() bookmarkChanged = new EventEmitter();

  tableHeading: HeadingData = {
    main: 'Bookmarked',
    sub: `Bookmark your Country/State of interest. You can update your bookmarks by clicking on the icon left to the Country/State name`,
  };
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  bookMarked(data: { code: string; type: BookmarkType }) {
    this.storageService.addBookmark(data);
    this.bookmarkChanged.emit(data);
  }
}
