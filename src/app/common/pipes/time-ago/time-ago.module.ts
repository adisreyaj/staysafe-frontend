/*
 * File: time-ago.module.ts
 * Project: staysafe-frontend
 * File Created: Friday, 10th April 2020 3:47:41 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 10th April 2020 3:48:01 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { TimeAgoPipe } from '../time-ago.pipe';

@NgModule({
  declarations: [TimeAgoPipe],
  exports: [TimeAgoPipe],
})
export class TimeAgoModule {}
