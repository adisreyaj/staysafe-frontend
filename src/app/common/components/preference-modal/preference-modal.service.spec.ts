/*
 * File: preference-modal.service.spec.ts
 * Project: staysafe-frontend
 * File Created: Tuesday, 21st April 2020 1:10:49 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 23rd April 2020 11:25:45 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { TestBed } from '@angular/core/testing';
import { PreferenceModalService } from './preference-modal.service';

describe('ModalService', () => {
  let service: PreferenceModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferenceModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
