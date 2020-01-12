import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MapChartModule } from '../first-page/map-chart/map-chart.module';
import { ClientInfoResultsTileComponent } from './components/client-info-results-tile/client-info-results-tile.component';
import { ClientInfoTileComponent } from './components/client-info-tile/client-info-tile.component';
import { ClientsComponent } from './components/clients/clients.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),

    MapChartModule,
    ReactiveFormsModule ,

  ],
  declarations: [
    ClientsComponent,
    ClientInfoTileComponent,
    ClientInfoResultsTileComponent,
  ],
  exports: [
    ClientsComponent,
    ClientInfoTileComponent,
    ClientInfoResultsTileComponent,
  ]
})
export class ClientsModule { }
