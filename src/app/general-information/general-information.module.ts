import { RadarChartModule } from './../first-page/radar-chart/radar-chart.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RightTileComponent } from './components/right-tile/right-tile.component';
import { BottomTileComponent } from './components/bottom-tile/bottom-tile.component';
import { TopTileComponent } from './components/top-tile/top-tile.component';
import { ChartModule } from '../first-page/chart/chart.module';
import { MapChartComponent } from '../first-page/map-chart/map-chart.component';
import { MapChartModule } from '../first-page/map-chart/map-chart.module';
import { ComponentsModule } from '../shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,

    ChartModule,
    MapChartModule,
    RadarChartModule,

    ComponentsModule,

  ],
  declarations: [
    TopTileComponent,
    BottomTileComponent,
    RightTileComponent
  ],
  exports: [
    TopTileComponent,
    BottomTileComponent,
    RightTileComponent
  ]
})
export class GeneralInformationModule { }
