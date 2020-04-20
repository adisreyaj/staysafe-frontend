/*
 * File: top-news.component.ts
 * Project: staysafe-frontend
 * File Created: Friday, 10th April 2020 3:23:12 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 10th April 2020 3:31:03 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input } from '@angular/core';
import { HeadingData } from 'src/app/common/components/heading/heading.component';
import { NewsArticle } from 'src/app/common/interfaces/news.interface';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss'],
})
export class TopNewsComponent implements OnInit {
  tableHeading: HeadingData = {
    main: 'Latest Updates',
    sub: `Be informed about the latest news and articles from different soruces all aggregated to provide you the right information when needed`,
  };

  @Input() data: NewsArticle[];
  constructor() {}

  ngOnInit(): void {}
}
