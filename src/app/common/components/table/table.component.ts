/*
 * File: table.component.ts
 * Project: staysafe-frontend
 * File Created: Wednesday, 8th April 2020 9:17:52 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 9th April 2020 8:15:58 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() dataSource: any[];
  @Output() bookMarked = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  toggleBookmark(stateCode: string) {
    this.bookMarked.emit(stateCode);
  }
}
