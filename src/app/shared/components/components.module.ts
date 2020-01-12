import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KpiValueComponent } from './kpi-value/kpi-value.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    KpiValueComponent
  ],
  exports: [
    KpiValueComponent
  ]
})
export class ComponentsModule { }
