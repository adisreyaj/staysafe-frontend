/*
 * File: trends.component.ts
 * Project: staysafe-frontend
 * File Created: Friday, 10th April 2020 2:21:31 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 10th April 2020 3:30:04 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input } from '@angular/core';
import { HeadingData } from 'src/app/common/components/heading/heading.component';
import { NewsArticle } from 'src/app/common/interfaces/news.interface';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss'],
})
export class TrendsComponent implements OnInit {
  tableHeading: HeadingData = {
    main: 'Trends',
    sub: `The charts above are updated after the close of the day in IST +530. Latest data is provisional, pending delayed reporting and adjustments from China's NHC.`,
  };

  @Input() data: any[];
  constructor() {}

  ngOnInit(): void {}
}
