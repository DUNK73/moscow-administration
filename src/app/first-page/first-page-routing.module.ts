import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientInfoResultsTileComponent } from '../clients/components/client-info-results-tile/client-info-results-tile.component';
import { FirstPageComponent } from './first-page.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';




const routes: Routes = [
  {
    path: '',
    component: FirstPageComponent,
    children:
      [
        { path: 'childSecondaryPath', component: PieChartComponent, outlet: 'childSecondary' },
        { path: 'clients-right-tile', component: ClientInfoResultsTileComponent, outlet: 'childSecondary' },
      ]
  },
  {
    path: 'first-page',
    component: FirstPageComponent,
    children:
      [
        { path: 'childSecondaryPath', component: PieChartComponent, outlet: 'childSecondary' },
        { path: 'clients-right-tile', component: ClientInfoResultsTileComponent, outlet: 'childSecondary' },
      ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FirstPageRoutingModule { }
