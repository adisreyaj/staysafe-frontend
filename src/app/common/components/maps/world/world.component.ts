/*
 * File: world.component.ts
 * Project: staysafe-frontend
 * File Created: Sunday, 12th April 2020 2:54:43 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 24th April 2020 10:02:12 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, NgZone, AfterViewInit, OnDestroy } from '@angular/core';
import { useTheme, create, color, percent } from '@amcharts/amcharts4/core';
import { MapChart, projections, MapPolygonSeries, HeatLegend } from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { DataService } from '@staysafe/services/data.service';
import { CountryData } from '@staysafe/interfaces/country.interface';
import { map } from 'rxjs/operators';

/* Chart code */
// Themes begin
@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
})
export class WorldComponent implements OnInit, AfterViewInit, OnDestroy {
  private map: MapChart;
  private mapData;
  constructor(private zone: NgZone, private dataService: DataService) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.dataService
      .getWorldCountryData()
      .pipe(
        map((data: CountryData[]) => {
          return data.map((item) => {
            return {
              id: item.countryCode,
              value: item.cases.total,
            };
          });
        }),
      )
      .subscribe((data) => {
        this.mapData = data;
        this.renderMap();
      });
  }
  renderMap() {
    useTheme(am4themes_animated);
    this.zone.runOutsideAngular(() => {
      let map = create('world_map', MapChart);
      map.hiddenState.properties.opacity = 0; // this creates initial fade-in
      map.geodata = am4geodata_worldLow;
      map.projection = new projections.Miller();

      // Create map polygon series
      const polygonSeries = map.series.push(new MapPolygonSeries());
      const polygonTemplate = polygonSeries.mapPolygons.template;
      polygonSeries.exclude = ['AQ'];
      polygonSeries.useGeodata = true;
      polygonSeries.nonScalingStroke = true;
      polygonSeries.strokeWidth = 0.5;
      polygonSeries.calculateVisualCenter = true;

      polygonSeries.events.on('validated', function () {
        polygonSeries.invalidate();
      });
      polygonTemplate.tooltipText = '{name}: [bold]{value} cases[/]';
      polygonSeries.heatRules.push({
        target: polygonSeries.mapPolygons.template,
        property: 'fill',
        min: color('#D3E3FC'),
        max: color('#184EA6'),
      });

      // add heat legend
      var heatLegend = map.chartContainer.createChild(HeatLegend);
      heatLegend.valign = 'bottom';
      heatLegend.align = 'left';
      heatLegend.width = percent(50);
      heatLegend.series = polygonSeries;
      heatLegend.orientation = 'horizontal';
      heatLegend.padding(20, 20, 20, 20);
      heatLegend.valueAxis.renderer.labels.template.fontSize = 10;
      heatLegend.markerContainer.height = 10;
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
