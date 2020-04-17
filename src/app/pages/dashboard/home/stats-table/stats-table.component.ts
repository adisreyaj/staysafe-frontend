/*
 * File: state-stats.component.ts
 * Project: staysafe-frontend
 * File Created: Thursday, 9th April 2020 12:47:16 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 18th April 2020 1:17:11 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { HeadingData } from '@staysafe/components/heading/heading.component';
import { StorageService, BookmarkType } from '@staysafe/services/storage.service';
import { TableDataWithType } from '@staysafe/components/table/table.component';
@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.scss'],
})
export class StatsTableComponent implements OnInit {
  @Input() data: TableDataWithType;
  tableHeading: HeadingData = {
    main: 'COVID - 19 Statistics',
    sub: `The coronavirus COVID-19 is affecting 209 countries and territories around the world and 2 international
      conveyances. The day is reset after midnight IST +530.`,
  };
  dataSource = [];
  searchTerm: FormControl = new FormControl('');

  @Output() bookmarkChanged = new EventEmitter();
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.dataSource = [...this.data.data];
    this.searchTerm.valueChanges.pipe(debounceTime(500)).subscribe((data) => {
      this.dataSource = [...this.data.data].filter((item) => item.name.toLowerCase().includes(data.toLowerCase()));
    });
  }

  bookMarked(data: { code: string; type: BookmarkType }) {
    this.storageService.addBookmark(data);
    this.bookmarkChanged.emit(data);
  }
}
