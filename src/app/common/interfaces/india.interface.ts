/*
 * File: india.interface.ts
 * Project: staysafe-frontend
 * File Created: Wednesday, 8th April 2020 9:59:21 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 16th April 2020 9:24:19 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

export interface StateData {
  bookmarked?: boolean;
  active: string;
  confirmed: string;
  deaths: string;
  deltaconfirmed: string;
  deltadeaths: string;
  deltarecovered: string;
  lastupdatedtime: string;
  recovered: string;
  state: string;
  statecode: string;
}

export interface IndiaStats {
  active: string;
  confirmed: string;
  deaths: string;
  deltaconfirmed: string;
  deltadeaths: string;
  deltarecovered: string;
  lastupdatedtime: string;
  recovered: string;
  state: string;
  statecode: string;
  statenotes: string;
}
