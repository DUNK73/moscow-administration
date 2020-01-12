import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RadarChartComponent } from './radar-chart.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    RadarChartComponent,
  ],
  exports: [
    RadarChartComponent,
  ]
})
export class RadarChartModule { }
