/*
 * File: links.component.ts
 * Project: staysafe-frontend
 * File Created: Saturday, 11th April 2020 8:13:15 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 11th April 2020 8:14:06 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */


import { Component, OnInit, Input } from '@angular/core';
import { LearnLinks } from '../learn.interface';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit {
  @Input() data: LearnLinks[];
  constructor() {}

  ngOnInit(): void {}
}
