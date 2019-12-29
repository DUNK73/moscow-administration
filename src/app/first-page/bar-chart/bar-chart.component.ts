import { Component, OnInit, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnDestroy, AfterViewInit {

  private chart: am4charts.XYChart;

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      const data = [];
      let visits = 10;
      for (let i = 1; i < 12; i++) {
        visits += Math.round((Math.random()) * Math.random() * 10);
        data.push({
          date: new Date(2019, i, 0),
          name: 'name' + i,
          value: visits,
        });
      }

      // Create chart instance
      this.chart = am4core.create('barchartdiv', am4charts.XYChart);

      // Add data
      this.chart.data = data;

      // Create axes
      const categoryAxis = this.chart.xAxes.push(new am4charts.DateAxis());
      categoryAxis.renderer.grid.template.strokeOpacity = 0;
      categoryAxis.renderer.labels.template.disabled = true;
      // categoryAxis
      // categoryAxis.title.text = 'Countries';

      const valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.grid.template.strokeOpacity = 0;
      valueAxis.renderer.labels.template.disabled = true;
      // valueAxis.tooltip
      // valueAxis.title.text = 'Litres sold (M)';

      // Create series
      const series = this.chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.dateX = 'date';
      series.dataFields.valueY = 'value';
      series.name = 'Sales';
      series.columns.template.tooltipText = '{date}\nПоказатель: {valueY}';
      series.columns.template.fill = am4core.color('rgb(47,151,214)'); // fill

      var columnTemplate = series.columns.template;
      columnTemplate.width = 10;
      // columnTemplate.column.cornerRadiusTopLeft = 20;
      // columnTemplate.column.cornerRadiusTopRight = 20;
      columnTemplate.strokeOpacity = 0;

      // let series2 = this.chart.series.push(new am4charts.LineSeries());
      // series2.name = 'Units';
      // series2.stroke = am4core.color('#CDA2AB');
      // series2.strokeWidth = 3;
      // series2.dataFields.valueY = 'units';
      // series2.dataFields.categoryX = 'country';
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
