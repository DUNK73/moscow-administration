import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page.component';
import { ClientInfoResultsTileComponent } from '../clients/components/client-info-results-tile/client-info-results-tile.component';
import { SharedComponent } from '../shared/shared.component';
import { ChildPrimaryComponent } from '../shared/ChildPrimaryComponent/ChildPrimaryComponent.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';



const routes: Routes = [
  {
    path: '',
    component: FirstPageComponent,
    children:
      [
        { path: '', component: ChildPrimaryComponent },
        { path: 'childSecondaryPath', component: PieChartComponent, outlet: 'childSecondary' },
        { path: 'client-info-results', component: ClientInfoResultsTileComponent, outlet: 'childSecondary' },
      ]
  },
  {
    path: 'fp2',
    component: FirstPageComponent,
    children:
      [
        { path: 'fp2', component: ChildPrimaryComponent },
        { path: 'childSecondaryPath', component: PieChartComponent, outlet: 'childSecondary' },
        { path: 'client-info-results', component: ClientInfoResultsTileComponent, outlet: 'childSecondary' },
      ]
  },
  {
    path: 'first-page',
    component: FirstPageComponent,
    children:
      [
        { path: '', component: ChildPrimaryComponent },
        { path: 'childSecondaryPath', component: PieChartComponent, outlet: 'childSecondary' },
        { path: 'client-info-results', component: ClientInfoResultsTileComponent, outlet: 'childSecondary' },
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
