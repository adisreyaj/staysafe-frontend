/*
 * File: table.component.ts
 * Project: staysafe-frontend
 * File Created: Wednesday, 8th April 2020 9:17:52 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 11th April 2020 1:31:38 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input() dataSource: any[];
  @Output() bookMarked = new EventEmitter<string>();

  @Input() loading = false;
  constructor() {}

  ngOnInit(): void {}

  toggleBookmark(stateCode: string) {
    this.bookMarked.emit(stateCode);
  }
}
