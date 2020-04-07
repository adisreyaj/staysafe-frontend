/*
 * File: dashboard-routing.module.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:17:52 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 7th April 2020 9:04:47 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{ path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
