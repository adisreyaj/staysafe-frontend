/*
 * File: top-news-card.component.ts
 * Project: staysafe-frontend
 * File Created: Friday, 10th April 2020 3:25:37 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 10th April 2020 3:30:25 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */


import { Component, OnInit, Input } from '@angular/core';
import { NewsArticle } from 'src/app/common/interfaces/news.interface';

@Component({
  selector: 'app-top-news-card',
  templateUrl: './top-news-card.component.html',
  styleUrls: ['./top-news-card.component.scss'],
})
export class TopNewsCardComponent implements OnInit {
  @Input() news: NewsArticle;
  constructor() {}

  ngOnInit(): void {}
}
