import { Component, OnInit, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { AnaliticsDataService } from 'src/app/core/dtata-services/analitics-data.service';
import { Industry } from 'src/app/models/industry';
import { tap, takeUntil, switchMap } from 'rxjs/operators';
import { ActivityType, ActivityTypeMapper } from '../../models/activity-type.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { SubIndustry, Indicator } from '../../../models/industry';

@Component({
  selector: 'app-analitics-bottom-tile-for-subindusry',
  templateUrl: './analitics-bottom-tile-for-subindusry.component.html',
  styleUrls: ['./analitics-bottom-tile-for-subindusry.component.css']
})
export class AnaliticsBottomTileForSubIndustryComponent implements OnInit, OnDestroy, AfterViewInit {

  private chart: am4charts.PieChart;

  public activityType: ActivityType;
  public activityTypeLabel: string;
  public industryId: number;
  public industryLabel: string;

  private unsubscribe$$ = new Subject();


  constructor(
    private analiticsDataService: AnaliticsDataService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly zone: NgZone,
  ) {

    this.activatedRoute.params
      .pipe(
        tap(params => {
          this.activityType = params.activityType;
          this.activityTypeLabel = ActivityTypeMapper.getLabel(this.activityType);
          this.industryId = +params.industry;
        }),
        tap(params => {
          this.ngAfterViewInit();
        }),
        takeUntil(this.unsubscribe$$)
      )
      .subscribe();

  }

  ngOnInit(): void {


  }

  private initChart(data: Industry) {

    if (!data || !data.subIndustries) {
      return;
    }

    const chartData = data.subIndustries.map(item => {
      let value: number;

      if (item.indicator instanceof Array) {
        value = item.indicator[item.indicator.length - 1].value;
      } else {
        value = (item.indicator as Indicator).value;
      }

      return {
        category: item.title,
        value,
      };
    });


    this.zone.runOutsideAngular(() => {

      /* Set themes */
      am4core.useTheme(am4themes_animated);

      /* Create chart instance */
      this.chart = am4core.create('analiticsInfoChartDiv', am4charts.PieChart);
      this.chart.colors.step = 10;

      // Add data
      this.chart.data = chartData;

      // Add and configure Series
      const pieSeries = this.chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'value';
      pieSeries.dataFields.category = 'category';
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

  ngAfterViewInit() {

    this.analiticsDataService.getApkIndustries()
      .pipe(
        switchMap((list: Array<Industry>) => {
          const industry = list.find(item => item.id === this.industryId);

          this.industryLabel = industry.title;

          return this.analiticsDataService
            .getApkSubIndustries(industry)
            .pipe(
              tap(data => {
                // this.industryLabel = industry.title;
                this.initChart({
                  id: this.industryId,
                  title: this.industryId.toString(),
                  indicator: null,
                  subIndustries: data
                });

              })
            );

        }),
        takeUntil(this.unsubscribe$$)
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
