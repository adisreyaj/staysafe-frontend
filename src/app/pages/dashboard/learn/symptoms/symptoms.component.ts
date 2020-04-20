/*
 * File: symptoms.component.ts
 * Project: staysafe-frontend
 * File Created: Saturday, 11th April 2020 8:22:44 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 11th April 2020 8:37:47 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss'],
})
export class SymptomsComponent implements OnInit {
  symptoms = [
    {
      title: 'Dry Cough',
      image: '../../../../../assets/images/symptoms/cough.svg',
    },
    {
      title: 'High Fever',
      image: '../../../../../assets/images/symptoms/fever.svg',
    },
    {
      title: 'Tiredness',
      image: '../../../../../assets/images/symptoms/tiredness.svg',
    },
    {
      title: 'Difficulty Breathing',
      image: '../../../../../assets/images/symptoms/breathing.svg',
    },
    {
      title: 'Sore Throat',
      image: '../../../../../assets/images/symptoms/sorethroat.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
