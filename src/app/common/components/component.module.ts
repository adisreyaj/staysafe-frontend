/*
 * File: component.module.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:16:25 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 23rd April 2020 11:39:45 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { FooterComponent } from './footer/footer.component';
import { QuickStatsComponent } from './quick-stats/quick-stats.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { TableComponent } from './table/table.component';
import { HeadingComponent } from './heading/heading.component';
import { NotificationBannerComponent } from './notification-banner/notification-banner.component';
import { WorldComponent } from './maps/world/world.component';
import { PreferenceModalComponent } from './preference-modal/preference-modal.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { PreferenceModalService } from './preference-modal/preference-modal.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    SubHeaderComponent,
    FooterComponent,
    QuickStatsComponent,
    ButtonGroupComponent,
    TableComponent,
    HeadingComponent,
    NotificationBannerComponent,
    WorldComponent,
    PreferenceModalComponent,
    SlideToggleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    OverlayModule,
    ScrollingModule,
  ],
  exports: [
    HeaderComponent,
    SubHeaderComponent,
    FooterComponent,
    ButtonGroupComponent,
    QuickStatsComponent,
    TableComponent,
    HeadingComponent,
    NotificationBannerComponent,
    WorldComponent,
    PreferenceModalComponent,
    SlideToggleComponent,
  ],
  providers: [PreferenceModalService],
})
export class ComponentModule {}
