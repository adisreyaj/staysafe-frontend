/*
 * File: trends.component.ts
 * Project: staysafe-frontend
 * File Created: Friday, 10th April 2020 2:21:31 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 15th April 2020 1:22:50 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { HeadingData } from 'src/app/common/components/heading/heading.component';
import { Color, Label } from 'ng2-charts';
import { TrendsChart } from '@staysafe/interfaces/chart.interface';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

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

  buttonGroup = of([
    {
      label: 'cumulative',
      active: true,
    },
    {
      label: 'daily',
      active: false,
    },
  ]);
  @Input() data: TrendsChart;

  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
      position: 'nearest',
      backgroundColor: '#212b36',
      titleFontFamily: 'SFProText',
      bodyFontFamily: 'SFProText',
      cornerRadius: 3,
      xPadding: 12,
      multiKeyBackground: '#212b36',
      yPadding: 8,
      titleAlign: 'left',
    },
    legend: {
      position: 'bottom',
      align: 'end',
      labels: {
        boxWidth: 12,
        fontColor: '#212b36',
        fontFamily: 'SFProText',
      },
    },
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            displayFormats: { week: 'DD MMM' },
            unit: 'week',
          },
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: '#f4f6f8',
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
    this.lineChartData = this.getLineChartData(this.data);
    this.lineChartLabels = this.data.labels.map((label) => label.slice(0, 6));
  }

  buttonToggled(type: string) {
    this.lineChartData = this.getLineChartData(this.data, type);
    this.buttonGroup = this.buttonGroup.pipe(
      map((items) => {
        return items.map((item) => {
          item.active = item.label === type ? true : false;
          return item;
        });
      }),
    );
  }

  private getLineChartData(data: TrendsChart, type = 'cumulative') {
    return data[type].map((data) => {
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
  }

  private getColor(type: string) {
    if (type.includes('Confirmed')) return '#ae61ef';
    if (type.includes('Deaths')) return '#de3618';
    if (type.includes('Recovered')) return '#50b83c';
  }
}
