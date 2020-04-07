/*
 * File: dashboard.module.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:17:52 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 7th April 2020 8:20:19 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ComponentModule } from 'src/app/common/components/component.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, ComponentModule],
})
export class DashboardModule {}
