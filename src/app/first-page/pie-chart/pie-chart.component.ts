import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import { AfterViewInit, Component, NgZone, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnDestroy, AfterViewInit {

  private chart: am4charts.PieChart;

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      // Create chart instance
      this.chart = am4core.create('piechartdiv', am4charts.PieChart);

      // Add data
      this.chart.data = [{
        country: 'Lithuania',
        litres: 501.9
      }, {
        country: 'Czech Republic',
        litres: 301.9
      }, {
        country: 'Ireland',
        litres: 201.1
      }, {
        country: 'Germany',
        litres: 165.8
      }, {
        country: 'Australia',
        litres: 139.9
      }, {
        country: 'Austria',
        litres: 128.3
      }, {
        country: 'UK',
        litres: 99
      }, {
        country: 'Belgium',
        litres: 60
      }, {
        country: 'The Netherlands',
        litres: 50
      }];

      // Add and configure Series
      const pieSeries = this.chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'litres';
      pieSeries.dataFields.category = 'country';

      // Let's cut a hole in our Pie chart the size of 40% the radius
      this.chart.innerRadius = am4core.percent(40);

      // Disable ticks and labels
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;

      // Disable tooltips
      pieSeries.slices.template.tooltipText = '';

      // Add a legend
      // this.chart.legend = new am4charts.Legend();
    });

  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
