/*
 * File: slide-toggle.component.ts
 * Project: staysafe-frontend
 * File Created: Monday, 20th April 2020 10:33:16 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 20th April 2020 11:11:40 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
})
export class SlideToggleComponent implements OnInit {
  @Output() private toggle = new EventEmitter();

  checked = false;
  constructor() {}

  ngOnInit(): void {}
  toggleButton() {
    this.checked = !this.checked;
    this.toggle.emit();
  }
}
