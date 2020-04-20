/*
 * File: modal.component.ts
 * Project: staysafe-frontend
 * File Created: Wednesday, 15th April 2020 2:07:23 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 16th April 2020 1:08:25 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  closeModal() {
    this.modalService.closeModal();
  }
}
