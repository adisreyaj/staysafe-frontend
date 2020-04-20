/*
 * File: learn.module.ts
 * Project: staysafe-frontend
 * File Created: Friday, 10th April 2020 12:26:25 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 11th April 2020 9:36:02 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnComponent } from './learn.component';
import { PreventionComponent } from './prevention/prevention.component';
import { LinksComponent } from './links/links.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { ComponentModule } from '@staysafe/components/component.module';

@NgModule({
  declarations: [LearnComponent, PreventionComponent, LinksComponent, SymptomsComponent],
  imports: [CommonModule, LearnRoutingModule, FlexLayoutModule, ComponentModule],
})
export class LearnModule {}
