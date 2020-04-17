/*
 * File: table.component.ts
 * Project: staysafe-frontend
 * File Created: Wednesday, 8th April 2020 9:17:52 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 18th April 2020 1:12:37 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { BookmarkType } from '@staysafe/services/storage.service';

export interface TableData {
  icon?: string;
  name: string;
  total: number;
  active: number;
  recovered: number;
  deceased: number;
  bookmarked?: boolean;
  code: string;
}

export interface TableDataWithType {
  type: BookmarkType;
  data: TableData[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input() data: TableDataWithType;
  @Output() bookMarked = new EventEmitter();

  @Input() loading = false;
  constructor() {}

  ngOnInit(): void {}

  toggleBookmark(code: string) {
    if (code) this.bookMarked.emit({ code, type: this.data.type });
  }

  trackBy(index): string {
    return index;
  }
}
