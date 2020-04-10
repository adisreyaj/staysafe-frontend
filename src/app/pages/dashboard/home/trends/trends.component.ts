/*
 * File: trends.component.ts
 * Project: staysafe-frontend
 * File Created: Friday, 10th April 2020 2:21:31 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 10th April 2020 10:26:13 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { HeadingData } from 'src/app/common/components/heading/heading.component';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss'],
})
export class TrendsComponent implements OnInit {
  tableHeading: HeadingData = {
    main: 'Trends',
    sub: `The charts above are updated after the close of the day in IST +530. Latest data is provisional, pending delayed reporting and adjustments from China's NHC.`,
  };

  @Input() data: { items: any[]; labels: string[] };

  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };
  public lineChartColors: Color[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  constructor() {}

  ngOnInit(): void {
    console.log({ data: this.data });
    this.lineChartData = this.data.items.map((data) => {
      return {
        data: data.data,
        label: data.title,
        lineTension: 0,
        fill: false,
        cubicInterpolationMode: 'monotone',
        borderColor: this.getColor(data.title),
        pointBackgroundColor: this.getColor(data.title),
      };
    });
    this.lineChartLabels = this.data.labels.map((label) => label.slice(0, 6));
  }

  private getColor(type: string) {
    switch (type) {
      case 'Total Confirmed':
        return '#ae61ef';
      case 'Total Deaths':
        return '#de3618';
      case 'Total Recovered':
        return '#50b83c';
    }
  }
}
