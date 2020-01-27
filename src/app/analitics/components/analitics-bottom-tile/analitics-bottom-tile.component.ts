import { Component, OnInit, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { AnaliticsDataService } from 'src/app/core/dtata-services/analitics-data.service';
import { Industry } from 'src/app/models/industry';
import { tap, takeUntil } from 'rxjs/operators';
import { ActivityType, ActivityTypeMapper } from '../../models/activity-type.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-analitics-bottom-tile',
  templateUrl: './analitics-bottom-tile.component.html',
  styleUrls: ['./analitics-bottom-tile.component.css']
})
export class AnaliticsBottomTileComponent implements OnInit, OnDestroy, AfterViewInit {

  private chart: am4charts.PieChart;

  public activityType: ActivityType;
  public activityTypeLabel: string;

  private unsubscribe$$ = new Subject();

  constructor(
    private analiticsDataService: AnaliticsDataService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private zone: NgZone,
  ) { }

  ngOnInit(): void {
    this.activityType = this.activatedRoute.snapshot.params['activityType'];
    this.activityTypeLabel = ActivityTypeMapper.getLabel(this.activityType);
    this.activatedRoute.params
      .pipe(
        tap(params => {
          this.activityType = params['activityType'];
          this.activityTypeLabel = ActivityTypeMapper.getLabel(this.activityType);
        }),
        takeUntil(this.unsubscribe$$)
      )
      .subscribe();
  }

  private initChart(data: Array<Industry>) {

    let chartData = data.map(item => {
      return {
        category: item.title,
        value: item.indicator.value
      };
    });


    this.zone.runOutsideAngular(() => {

      /* Set themes */
      am4core.useTheme(am4themes_animated);

      /* Create chart instance */
      this.chart = am4core.create('analiticsInfoChartDiv', am4charts.PieChart);

      // Add data
      this.chart.data = chartData;

      // Add and configure Series
      const pieSeries = this.chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'value';
      pieSeries.dataFields.category = 'category';
      pieSeries.slices.template.tooltipText = '{category}:\n {value}';

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

  ngAfterViewInit() {

    this.analiticsDataService
      .getApkIndustries()
      .pipe(
        tap(data => {
          this.initChart(data);
        })
      )
      .subscribe();

  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
    this.unsubscribe$$.next();
  }

}
