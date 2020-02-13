import { Component, OnInit, NgZone, OnDestroy, AfterViewInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { animationTimeout } from '../animations';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnDestroy, AfterViewInit {


  private chart: am4charts.XYChart;

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    setTimeout(() => {
      this.zone.runOutsideAngular(() => {
        const chart = am4core.create('chartdiv', am4charts.XYChart);

        chart.paddingRight = 20;

        const data = [];
        let visits = 10;
        let visits2 = 15;
        for (let i = 1; i < 10; i++) {
          visits += Math.round((Math.random()) * Math.random() * 10);
          visits2 += Math.round((Math.random()) * Math.random() * 10);
          data.push({
            date: new Date(2010 + i, 0, 0),
            name: 'name' + i,
            value: visits,
            value2: visits2,
          });
        }

        chart.data = data;

        const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.labels.template.fill = am4core.color('#ffffff');

        const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;
        valueAxis.renderer.labels.template.fill = am4core.color('#ffffff');
        valueAxis.title.text = 'млрд $';
        valueAxis.title.fill = am4core.color('#ffffff');

        const series = chart.series.push(new am4charts.LineSeries());
        // series.data = data;
        series.dataFields.dateX = 'date';
        series.dataFields.valueY = 'value';
        series.bullets.push(new am4charts.CircleBullet());

        const series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.dateX = 'date';
        series2.dataFields.valueY = 'value2';
        series2.bullets.push(new am4charts.CircleBullet());

        series.tooltipText = '{valueY.value}';
        chart.cursor = new am4charts.XYCursor();

        const scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(series);
        // scrollbarX.series.push(series2);
        // chart.scrollbarX = scrollbarX;

        this.chart = chart;
      });
    }, animationTimeout);
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
