import { Component, OnInit, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { AnaliticsDataService } from 'src/app/shared/dtata-services/analitics-data.service';
import { Industry } from 'src/app/models/industry';
import { tap, takeUntil } from 'rxjs/operators';
import { ActivityType, ActivityTypeMapper } from '../../models/activity-type.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { SubIndustry } from '../../../models/industry';

@Component({
  selector: 'app-analitics-bottom-tile-for-subindusry',
  templateUrl: './analitics-bottom-tile-for-subindusry.component.html',
  styleUrls: ['./analitics-bottom-tile-for-subindusry.component.css']
})
export class AnaliticsBottomTileForSubIndustryComponent implements OnInit, OnDestroy, AfterViewInit {

  private chart: am4charts.PieChart;

  public activityType: ActivityType;
  public activityTypeLabel: string;
  public industryId: string;
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
          this.activityType = params['activityType'];
          this.activityTypeLabel = ActivityTypeMapper.getLabel(this.activityType);
          this.industryId = params['industry'];
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

    if (!data || !data.subIndustry) {
      return;
    }

    const chartData = data.subIndustry.map(item => {
      return {
        category: item.title,
        value: item.exportDataList[item.exportDataList.length - 1].value
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

    this.analiticsDataService.getAnalitics()
      .pipe(
        tap(data => {
          const industry = data.find(x => x.id === +this.industryId);
          if (industry) {
            this.industryLabel = industry.title;
            this.initChart(industry);
          }
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
