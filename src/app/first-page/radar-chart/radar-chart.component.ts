import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import { AfterViewInit, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { animationTimeout } from '../animations';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit, OnDestroy, AfterViewInit {

  private chart: am4charts.RadarChart;

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    setTimeout(() => {
      this.zone.runOutsideAngular(() => {


        /* Set themes */
        am4core.useTheme(am4themes_animated);

        /* Create chart instance */
        this.chart = am4core.create('radarchartdiv', am4charts.RadarChart);

        const chart = this.chart;

        chart.data = [
          {
            category: 'Цель к 2024 г.',
            value1: 133,
          },
          {
            category: 'Контракты',
            value2: 152
          },
          {
            category: 'Соглашения',
            value3: 132
          },

        ];

        chart.colors.step = 4;
        // chart.dateFormatter.inputDateFormat = 'YYYY-MM-dd';

        chart.radius = am4core.percent(90);
        chart.innerRadius = am4core.percent(40);

        const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis<am4charts.AxisRendererRadial>());
        categoryAxis.dataFields.category = 'category';
        categoryAxis.renderer.labels.template.location = 0.5;
        categoryAxis.renderer.labels.template.horizontalCenter = 'right';
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.tooltipLocation = 0.5;
        categoryAxis.renderer.grid.template.strokeOpacity = 0.07;
        categoryAxis.renderer.minGridDistance = 10;
        // categoryAxis.mouseEnabled = false;
        categoryAxis.tooltip.disabled = true;
        categoryAxis.renderer.labels.template.fill = am4core.color('#ffffff');

        const valueAxis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
        //  valueAxis.renderer.labels.template.horizontalCenter = 'center';
        valueAxis.strictMinMax = true;
        valueAxis.renderer.maxLabelPosition = 0.99;
        valueAxis.renderer.grid.template.strokeOpacity = 0.07;
        valueAxis.min = 0;
        valueAxis.max = 200;
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.labels.template.disabled = true;


        const series1 = chart.series.push(new am4charts.RadarColumnSeries());
        series1.name = 'Series 1';
        // series1.dataFields.openDateX = 'startDate2';
        series1.dataFields.valueX = 'value1';
        series1.dataFields.categoryY = 'category';
        // series1.clustered = false;
        series1.columns.template.radarColumn.cornerRadius = 30;
        series1.columns.template.tooltipText = '{category}: {valueX}';
        series1.zIndex = 3;

        const series2 = chart.series.push(new am4charts.RadarColumnSeries());
        series2.name = 'Series 2';
        // series2.dataFields.openDateX = 'startDate2';
        series2.dataFields.valueX = 'value2';
        series2.dataFields.categoryY = 'category';
        // series2.clustered = false;
        series2.columns.template.radarColumn.cornerRadius = 30;
        series2.columns.template.tooltipText = '{category}: {valueX}';
        series2.zIndex = 2;

        const series3 = chart.series.push(new am4charts.RadarColumnSeries());
        series3.name = 'Series 3';
        // series3.dataFields.valueX = 'startDate3';
        series3.dataFields.valueX = 'value3';
        series3.dataFields.categoryY = 'category';
        // series3.clustered = false;
        series3.columns.template.radarColumn.cornerRadius = 30;
        series3.columns.template.tooltipText = '{category}: {valueX}';


        chart.seriesContainer.zIndex = -1;

        // chart.scrollbarX = new am4core.Scrollbar();
        // chart.scrollbarY = new am4core.Scrollbar();

        chart.cursor = new am4charts.RadarCursor();
        chart.cursor.innerRadius = am4core.percent(40);
        chart.cursor.lineY.disabled = true;

        const yearLabel = chart.radarContainer.createChild(am4core.Label);
        yearLabel.text = '200';
        yearLabel.fontSize = 30;
        yearLabel.horizontalCenter = 'middle';
        yearLabel.verticalCenter = 'middle';
      });
    }, animationTimeout)

  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
