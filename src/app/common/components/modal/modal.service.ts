/*
 * File: modal.service.ts
 * Project: staysafe-frontend
 * File Created: Wednesday, 15th April 2020 2:09:43 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 16th April 2020 12:11:39 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Injectable } from '@angular/core';
import { Overlay, OverlayRef, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  prefOverlay: OverlayRef;
  constructor(private overlay: Overlay) {}

  openModal() {
    this.prefOverlay = this.overlay.create({
      hasBackdrop: true,
      panelClass: 'preference-modal',
      width: '350px',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    });
    const prefPortal = new ComponentPortal(ModalComponent);
    this.prefOverlay.attach(prefPortal);
  }

  closeModal() {
    this.prefOverlay.detach();
  }
}
