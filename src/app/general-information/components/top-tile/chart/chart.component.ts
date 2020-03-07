import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import { AfterViewInit, Component, NgZone, OnDestroy, OnInit, Input } from '@angular/core';
import { ExportInformation } from 'src/app/models/industry';
import { animationTimeout } from 'src/app/first-page/animations';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input()
  public data: Array<ExportInformation>;

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

        let d: Array<ExportInformation> = [];

        this.data.forEach(x => {
          if (!d.find(y => y.date === x.date)) {
            d.push(x);
          }
        });

        chart.data = d;

        const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.labels.template.fill = am4core.color('#ffffff');

        const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;
        valueAxis.renderer.labels.template.fill = am4core.color('#ffffff');
        valueAxis.title.text = 'млрд $';
        valueAxis.title.fill = am4core.color('#ffffff');

        const seriesApk = chart.series.push(new am4charts.LineSeries());
        // series.data = data;
        seriesApk.dataFields.dateX = 'date';
        seriesApk.dataFields.valueY = 'valueApk';
        seriesApk.bullets.push(new am4charts.CircleBullet());

        seriesApk.tooltipText = 'АПК: {valueY.value}';


        const seriesProm = chart.series.push(new am4charts.LineSeries());
        seriesProm.dataFields.dateX = 'date';
        seriesProm.dataFields.valueY = 'valueProm';
        seriesProm.bullets.push(new am4charts.CircleBullet());

        seriesProm.tooltipText = 'ПРОМ: {valueY.value}';

        chart.cursor = new am4charts.XYCursor();

        const scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(seriesApk);
        // scrollbarX.series.push(series2);
        // chart.scrollbarX = scrollbarX;

        // let legend = new am4charts.Legend();
        // legend.parent = chart.chartContainer;
        // legend.itemContainers.template.togglable = false;
        // legend.marginTop = 0;

        // seriesApk.events.on('ready', function(ev) {
        //   let legenddata = [
        //     {
        //       name: 'АПК',
        //       fill: seriesApk.fill
        //     },
        //     {
        //       name: 'ПРОМ',
        //       fill: seriesProm.fill
        //     }
        //   ];
        //   legend.data = legenddata;
        // });

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
