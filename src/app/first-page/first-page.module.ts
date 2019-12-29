import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartComponent } from './chart/chart.component';
import { FirstPageRoutingModule } from './first-page-routing.module';
import { FirstPageComponent } from './first-page.component';
import { KpiValueComponent } from './kpi-value/kpi-value.component';
import { MapChartComponent } from './map-chart/map-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';

@NgModule({
  imports: [
    CommonModule,

    FirstPageRoutingModule,

  ],
  declarations: [
    FirstPageComponent,
    KpiValueComponent,

    ChartComponent,
    BarChartComponent,
    PieChartComponent,
    MapChartComponent,
    RadarChartComponent
  ]
})
export class FirstPageModule { }
