import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import { AfterViewInit, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { animationTimeout } from '../animations';

@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.css']
})
export class MapChartComponent implements OnInit, OnDestroy, AfterViewInit {

  private chart: am4maps.MapChart;

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.zone.runOutsideAngular(() => {

        // Create map instance
        this.chart = am4core.create('mapchartdiv', am4maps.MapChart);
        const chart = this.chart;


        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series
        const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

        // Configure series
        const polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = '{name}';
        polygonTemplate.fill = am4core.color('#74B266');

        // Create hover state and set alternative fill color
        const hs = polygonTemplate.states.create('hover');
        hs.properties.fill = am4core.color('#367B25');

        // Remove Antarctica
        polygonSeries.exclude = ['AQ'];

        // Add some data
        polygonSeries.data = [{
          id: 'US',
          name: 'United States',
          value: 100,
          // fill: am4core.color('#F05C5C')
        }, {
          id: 'FR',
          name: 'France',
          value: 50,
          // fill: am4core.color('#5C5CFF')
        }];

        // Bind "fill" property to "fill" key in data
        polygonTemplate.propertyFields.fill = 'fill';

        // Create image series
        const imageSeries = chart.series.push(new am4maps.MapImageSeries());

        // Create a circle image in image series template so it gets replicated to all new images
        const imageSeriesTemplate = imageSeries.mapImages.template;
        const circle = imageSeriesTemplate.createChild(am4core.Circle);
        circle.radius = 4;
        circle.fill = am4core.color('#B27799');
        circle.stroke = am4core.color('#FFFFFF');
        circle.strokeWidth = 2;
        circle.nonScaling = true;
        circle.tooltipText = '{title}';

        // Set property fields
        imageSeriesTemplate.propertyFields.latitude = 'latitude';
        imageSeriesTemplate.propertyFields.longitude = 'longitude';

        // Add data for the three cities
        imageSeries.data = [{
          latitude: 48.856614,
          longitude: 2.352222,
          title: 'Paris'
        }, {
          latitude: 40.712775,
          longitude: -74.005973,
          title: 'New York'
        }, {
          latitude: 49.282729,
          longitude: -123.120738,
          title: 'Vancouver'
        }];
      });
    },
      animationTimeout);

  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
