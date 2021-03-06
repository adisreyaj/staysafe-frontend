/*
 * File: india.component.ts
 * Project: staysafe-frontend
 * File Created: Sunday, 12th April 2020 8:21:38 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 16th April 2020 10:40:09 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_indiaHigh from '@amcharts/amcharts4-geodata/indiaHigh';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import { DataService } from '@staysafe/services/data.service';
import { map } from 'rxjs/operators';
import { StateData } from '@staysafe/interfaces/india.interface';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.scss'],
})
export class IndiaComponent implements OnInit, AfterViewInit, OnDestroy {
  private map: am4maps.MapChart;
  private mapData;
  constructor(private zone: NgZone, private dataService: DataService) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.dataService
      .getIndiaStatesData()
      .pipe(
        map((data: StateData[]) => {
          return data.map((item) => {
            return {
              id: `IN-${item.statecode}`,
              value: item.confirmed,
            };
          });
        }),
      )
      .subscribe((data) => {
        this.mapData = data;
        this.renderMap();
      });
  }
  private renderMap() {
    am4core.useTheme(am4themes_animated);
    this.zone.runOutsideAngular(() => {
      let map = am4core.create('india_map', am4maps.MapChart);
      map.hiddenState.properties.opacity = 0; // this creates initial fade-in
      map.geodata = am4geodata_indiaHigh;
      map.projection = new am4maps.projections.Miller();

      // Create map polygon series
      const polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
      const polygonTemplate = polygonSeries.mapPolygons.template;
      polygonSeries.useGeodata = true;
      polygonSeries.nonScalingStroke = true;
      polygonSeries.strokeWidth = 0.5;
      polygonSeries.calculateVisualCenter = true;
      polygonSeries.fill = am4core.color('#184EA6');
      polygonSeries.events.on('validated', function () {
        polygonSeries.invalidate();
      });
      polygonTemplate.tooltipText = '{name}: [bold]{value} cases[/]';
      polygonSeries.heatRules.push({
        target: polygonSeries.mapPolygons.template,
        property: 'fill',
        min: am4core.color('#D3E3FC'),
        max: am4core.color('#184EA6'),
      });

      // add heat legend
      var heatLegend = map.chartContainer.createChild(am4maps.HeatLegend);
      heatLegend.valign = 'bottom';
      heatLegend.align = 'left';
      heatLegend.width = am4core.percent(50);
      heatLegend.height = 5;
      heatLegend.series = polygonSeries;
      heatLegend.orientation = 'horizontal';
      heatLegend.padding(20, 20, 20, 20);
      heatLegend.valueAxis.renderer.labels.template.fontSize = 8;
      heatLegend.markerContainer.height = 5;
      heatLegend.valueAxis.renderer.minGridDistance = 50;

      polygonSeries.mapPolygons.template.events.on('over', (event) => {
        handleHover(event.target);
      });

      polygonSeries.mapPolygons.template.events.on('hit', (event) => {
        handleHover(event.target);
      });

      function handleHover(mapPolygon) {
        if (!isNaN(mapPolygon.dataItem.value)) {
          heatLegend.valueAxis.showTooltipAt(mapPolygon.dataItem.value);
        } else {
          heatLegend.valueAxis.hideTooltip();
        }
      }

      polygonSeries.mapPolygons.template.strokeOpacity = 0.4;
      polygonSeries.mapPolygons.template.events.on('out', (event) => {
        heatLegend.valueAxis.hideTooltip();
      });

      polygonSeries.data = this.mapData;
      this.map = map;
    });
  }
  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.map) {
        this.map.dispose();
      }
    });
  }
}
