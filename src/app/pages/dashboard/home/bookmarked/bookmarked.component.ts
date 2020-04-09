/*
 * File: bookmarked.component.ts
 * Project: staysafe-frontend
 * File Created: Thursday, 9th April 2020 12:56:17 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 9th April 2020 10:36:59 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HeadingData } from '../../../../common/components/heading/heading.component';
import { StorageService } from '../../../../common/services/storage.service';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.scss'],
})
export class BookmarkedComponent implements OnInit {
  @Input() data: any[];
  @Output() bookmarkChanged = new EventEmitter();

  tableHeading: HeadingData = {
    main: 'Bookmarked',
    sub: `Bookmark your Country/State of interest. You can update your bookmarks by clicking on the icon left to the Country/State name`,
  };
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  bookMarked(code: string) {
    this.storageService.addBookmark(code);
    this.bookmarkChanged.emit();
  }
}
