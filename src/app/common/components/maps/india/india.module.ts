/*
 * File: india.module.ts
 * Project: staysafe-frontend
 * File Created: Sunday, 12th April 2020 8:26:53 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 12th April 2020 8:27:33 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndiaComponent } from './india.component';

@NgModule({
  declarations: [IndiaComponent],
  imports: [CommonModule],
  exports: [IndiaComponent],
})
export class IndiaModule {}
