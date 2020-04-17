/*
 * File: home.module.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:18:27 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 18th April 2020 1:19:00 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';

import { TopNewsCardComponent } from './top-news/top-news-card/top-news-card.component';
import { StatsTableComponent } from './stats-table/stats-table.component';
import { IndiaModule } from '@staysafe/components/maps/india/india.module';
import { TimeAgoModule } from '@staysafe/pipes/time-ago/time-ago.module';
import { BookmarkedComponent } from './bookmarked/bookmarked.component';
import { ComponentModule } from '@staysafe/components/component.module';
import { TopNewsComponent } from './top-news/top-news.component';
import { TrendsComponent } from './trends/trends.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    StatsTableComponent,
    BookmarkedComponent,
    TrendsComponent,
    TopNewsComponent,
    TopNewsCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    ComponentModule,
    ReactiveFormsModule,
    TimeAgoModule,
    ChartsModule,
    IndiaModule,
  ],
})
export class HomeModule {}
