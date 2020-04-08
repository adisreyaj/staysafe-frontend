/*
 * File: component.module.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:16:25 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 9th April 2020 12:51:00 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { FooterComponent } from './footer/footer.component';
import { QuickStatsComponent } from './quick-stats/quick-stats.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { TableComponent } from './table/table.component';
import { HeadingComponent } from './heading/heading.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SubHeaderComponent,
    FooterComponent,
    QuickStatsComponent,
    ButtonGroupComponent,
    TableComponent,
    HeadingComponent,
  ],
  imports: [CommonModule, RouterModule, FlexLayoutModule],
  exports: [
    HeaderComponent,
    SubHeaderComponent,
    FooterComponent,
    ButtonGroupComponent,
    QuickStatsComponent,
    TableComponent,
    HeadingComponent,
  ],
})
export class ComponentModule {}
