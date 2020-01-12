import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientsModule } from '../clients/clients.module';
import { GeneralInformationModule } from '../general-information/general-information.module';
import { AnaliticsModule } from './../analitics/analitics.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartModule } from './chart/chart.module';
import { FirstPageRoutingModule } from './first-page-routing.module';
import { FirstPageComponent } from './first-page.component';
import { MapChartModule } from './map-chart/map-chart.module';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartModule } from './radar-chart/radar-chart.module';

@NgModule({
  imports: [
    CommonModule,

    FirstPageRoutingModule,

    ClientsModule,
    AnaliticsModule,
    GeneralInformationModule,

    ChartModule,
    MapChartModule,
    RadarChartModule,

  ],
  declarations: [
    FirstPageComponent,

    // ChartComponent,
    BarChartComponent,
    PieChartComponent,
    // MapChartComponent,
    // RadarChartComponent
  ]
})
export class FirstPageModule { }
