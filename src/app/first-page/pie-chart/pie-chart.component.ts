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
      this.chart.data = [
        {
          kpi: 'kpi 1',
          value: 501.9
        },
        {
          kpi: 'kpi 2',
          value: 301.9
        },
        {
          kpi: 'kpi 3',
          value: 201.1
        },
      ];

      // Add and configure Series
      const pieSeries = this.chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'value';
      pieSeries.dataFields.category = 'kpi';
      pieSeries.slices.template.tooltipText = '{category}: {value}';

      // Let's cut a hole in our Pie chart the size of 40% the radius
      this.chart.innerRadius = am4core.percent(40);

      // Disable ticks and labels
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;

      // Disable tooltips
      // pieSeries.slices.template.tooltipText = '';

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
