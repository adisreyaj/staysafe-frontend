/*
 * File: chart.interface.ts
 * Project: staysafe-frontend
 * File Created: Friday, 10th April 2020 10:42:53 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 10th April 2020 10:45:45 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

export interface TrendsChart {
  labels: any;
  cumulative: {
    title: string;
    data: any[];
  }[];
  daily: {
    title: string;
    data: any[];
  }[];
}
