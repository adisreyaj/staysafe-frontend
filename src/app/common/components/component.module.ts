/*
 * File: component.module.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 7th April 2020 8:16:25 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 20th April 2020 11:13:14 pm
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
import { ModalComponent } from './modal/modal.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ModalService } from './modal/modal.service';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { FormsModule } from '@angular/forms';

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
    ModalComponent,
    SlideToggleComponent,
  ],
  imports: [CommonModule, RouterModule, FlexLayoutModule, OverlayModule, ScrollingModule],
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
    ModalComponent,
    SlideToggleComponent,
  ],
  providers: [ModalService],
})
export class ComponentModule {}
