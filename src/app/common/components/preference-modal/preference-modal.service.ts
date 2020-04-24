/*
 * File: modal.service.ts
 * Project: staysafe-frontend
 * File Created: Wednesday, 15th April 2020 2:09:43 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 24th April 2020 10:25:28 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { PreferenceModalComponent } from './preference-modal.component';

@Injectable({
  providedIn: 'root',
})
export class PreferenceModalService {
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
    const prefPortal = new ComponentPortal(PreferenceModalComponent);
    this.prefOverlay.attach(prefPortal);
  }

  closeModal() {
    this.prefOverlay.detach();
  }
}
