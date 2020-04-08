/*
 * File: home.module.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:18:27 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 9th April 2020 12:51:07 am
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

@NgModule({
  declarations: [HomeComponent, StateStatsComponent],
  imports: [CommonModule, HomeRoutingModule, FlexLayoutModule, ComponentModule, ReactiveFormsModule],
})
export class HomeModule {}
