import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { ChartComponent } from './chart.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ChartComponent,
  ],
  exports: [
    ChartComponent,
  ]
})
export class ChartModule { }
