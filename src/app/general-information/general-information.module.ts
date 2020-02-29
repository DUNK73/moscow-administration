import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapChartModule } from '../first-page/map-chart/map-chart.module';
import { ComponentsModule } from '../shared/components/components.module';
import { RadarChartModule } from './../first-page/radar-chart/radar-chart.module';
import { BottomTileComponent } from './components/bottom-tile/bottom-tile.component';
import { RightTileComponent } from './components/right-tile/right-tile.component';
import { ChartModule } from './components/top-tile/chart/chart.module';
import { TopTileComponent } from './components/top-tile/top-tile.component';


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
