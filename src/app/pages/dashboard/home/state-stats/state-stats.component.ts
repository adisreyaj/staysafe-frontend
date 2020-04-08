/*
 * File: state-stats.component.ts
 * Project: staysafe-frontend
 * File Created: Thursday, 9th April 2020 12:47:16 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 9th April 2020 12:50:25 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { HeadingData } from '../../../../common/components/heading/heading.component';
@Component({
  selector: 'app-state-stats',
  templateUrl: './state-stats.component.html',
  styleUrls: ['./state-stats.component.scss'],
})
export class StateStatsComponent implements OnInit {
  @Input() data: any[];
  tableHeading: HeadingData = {
    main: 'COVID - 19 Statistics',
    sub: `The coronavirus COVID-19 is affecting 209 countries and territories around the world and 2 international
      conveyances. The day is reset after midnight IST +530.`,
  };
  dataSource = [];
  searchTerm: FormControl = new FormControl('');
  constructor() {}

  ngOnInit(): void {
    this.dataSource = [...this.data];
    this.searchTerm.valueChanges.pipe(debounceTime(500)).subscribe((data) => {
      this.dataSource = [...this.data].filter((item) => item.state.toLowerCase().includes(data.toLowerCase()));
    });
  }
}