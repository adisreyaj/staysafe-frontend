/*
 * File: dashboard-routing.module.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:17:52 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 16th April 2020 1:21:07 am
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
    children: [
      { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
      { path: 'news', loadChildren: () => import('./news/news.module').then((m) => m.NewsModule) },
      { path: 'learn', loadChildren: () => import('./learn/learn.module').then((m) => m.LearnModule) },
      {
        path: 'preferences',
        loadChildren: () => import('./preferences/preferences.module').then((m) => m.PreferencesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
