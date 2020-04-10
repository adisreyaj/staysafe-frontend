/*
 * File: button-group.component.ts
 * Project: staysafe-frontend
 * File Created: Wednesday, 8th April 2020 12:26:36 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 10th April 2020 10:52:58 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent implements OnInit {
  @Input() buttons = [
    {
      label: 'India',
      active: true,
    },
    {
      label: 'Worldwide',
      link: false,
    },
  ];

  @Input() type: 'secondary' | 'primary' = 'primary';

  @Output() buttonClicked = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  buttonToggle(button: string) {
    this.buttonClicked.emit(button);
  }
}
