/*
 * File: preferences.module.ts
 * Project: staysafe-frontend
 * File Created: Thursday, 16th April 2020 1:20:25 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 16th April 2020 1:20:46 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferencesRoutingModule } from './preferences-routing.module';
import { PreferencesComponent } from './preferences.component';
import { ComponentModule } from '@staysafe/components/component.module';

@NgModule({
  declarations: [PreferencesComponent],
  imports: [CommonModule, PreferencesRoutingModule, ComponentModule],
})
export class PreferencesModule {}
