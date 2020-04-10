/*
 * File: home.module.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:18:27 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 10th April 2020 3:48:11 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentModule } from 'src/app/common/components/component.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StateStatsComponent } from './state-stats/state-stats.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookmarkedComponent } from './bookmarked/bookmarked.component';
import { TrendsComponent } from './trends/trends.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { TopNewsCardComponent } from './top-news/top-news-card/top-news-card.component';
import { TimeAgoModule } from '../../../common/pipes/time-ago/time-ago.module';

@NgModule({
  declarations: [
    HomeComponent,
    StateStatsComponent,
    BookmarkedComponent,
    TrendsComponent,
    TopNewsComponent,
    TopNewsCardComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, FlexLayoutModule, ComponentModule, ReactiveFormsModule, TimeAgoModule],
})
export class HomeModule {}
