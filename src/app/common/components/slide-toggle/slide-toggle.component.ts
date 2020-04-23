/*
 * File: slide-toggle.component.ts
 * Project: staysafe-frontend
 * File Created: Monday, 20th April 2020 10:33:16 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 23rd April 2020 11:19:19 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

export interface SlideToggle {
  type: string;
  status: boolean;
}

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
})
export class SlideToggleComponent implements OnInit {
  @Input() isChecked = false;
  @Input() type;

  @Output() private toggle = new EventEmitter<SlideToggle>();
  constructor() {}

  ngOnInit(): void {}
  toggleButton() {
    this.isChecked = !this.isChecked;
    this.toggle.emit({ type: this.type, status: this.isChecked });
  }
}
