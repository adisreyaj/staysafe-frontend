/*
 * File: table.component.ts
 * Project: staysafe-frontend
 * File Created: Wednesday, 8th April 2020 9:17:52 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 9th April 2020 12:38:40 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input } from '@angular/core';
import { HeadingData } from '../heading/heading.component';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: any[];
  dataSource = [];
  searchTerm: FormControl = new FormControl('');
  tableHeading: HeadingData = {
    main: 'COVID - 19 Statistics',
    sub: `The coronavirus COVID-19 is affecting 209 countries and territories around the world and 2 international
      conveyances. The day is reset after midnight IST +530.`,
  };
  constructor() {}

  ngOnInit(): void {
    this.dataSource = [...this.data];
    this.searchTerm.valueChanges.pipe(debounceTime(500)).subscribe((data) => {
      this.dataSource = [...this.data].filter((item) => item.state.toLowerCase().includes(data.toLowerCase()));
    });
  }
}
