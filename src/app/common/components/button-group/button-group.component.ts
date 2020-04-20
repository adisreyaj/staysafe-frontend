/*
 * File: button-group.component.ts
 * Project: staysafe-frontend
 * File Created: Wednesday, 8th April 2020 12:26:36 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 12th April 2020 11:48:21 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ToggleService } from '@staysafe/services/toggle.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent implements OnInit {
  @Input() buttons$;

  @Input() type: 'secondary' | 'primary' = 'primary';

  @Output() buttonClicked = new EventEmitter();
  constructor(private toggleService: ToggleService) {}

  ngOnInit(): void {}

  buttonToggle(button: string) {
    this.toggleService.toggleMainSelection(button);
    this.buttonClicked.emit(button);
  }
}
