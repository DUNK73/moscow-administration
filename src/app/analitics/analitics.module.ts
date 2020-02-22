import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnaliticsTopTileComponent } from './components/analitics-top-tile/analitics-top-tile.component';
import { AnaliticsBottomTileComponent } from './components/analitics-bottom-tile/analitics-bottom-tile.component';
import { AnaliticsRightTileComponent } from './components/analitics-right-tile/analitics-right-tile.component';
import { MapChartModule } from '../first-page/map-chart/map-chart.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),

    MapChartModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AnaliticsTopTileComponent,
    AnaliticsBottomTileComponent,
    AnaliticsRightTileComponent,
  ]
})
export class AnaliticsModule { }
