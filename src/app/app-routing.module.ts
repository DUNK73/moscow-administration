import { AnaliticsRightTileForSubIndustryComponent } from './analitics/components/analitics-right-tile-for-subindusry/analitics-right-tile-for-subindusry.component';
import { PieChartComponent } from './first-page/pie-chart/pie-chart.component';
import { ChildComponent } from './shared/ChildComponent/ChildComponent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutletComponent } from './shared/outlet/outlet.component';
import { SharedComponent } from './shared/shared.component';
import { RootPrimaryComponent } from './shared/RootPrimaryComponent/RootPrimaryComponent.component';
import { RootSecondaryComponent } from './shared/RootSecondaryComponent/RootSecondaryComponent.component';
import { ChildPrimaryComponent } from './shared/ChildPrimaryComponent/ChildPrimaryComponent.component';
import { ChildSecondaryComponent } from './shared/ChildSecondaryComponent/ChildSecondaryComponent.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ClientInfoResultsTileComponent } from './clients/components/client-info-results-tile/client-info-results-tile.component';
import { ClientInfoTileComponent } from './clients/components/client-info-tile/client-info-tile.component';
import { TopTileComponent } from './general-information/components/top-tile/top-tile.component';
import { BottomTileComponent } from './general-information/components/bottom-tile/bottom-tile.component';
import { ClientsComponent } from './clients/components/clients/clients.component';
import { RightTileComponent } from './general-information/components/right-tile/right-tile.component';
import { AnaliticsTopTileComponent } from './analitics/components/analitics-top-tile/analitics-top-tile.component';
import { AnaliticsBottomTileComponent } from './analitics/components/analitics-bottom-tile/analitics-bottom-tile.component';
import { AnaliticsRightTileComponent } from './analitics/components/analitics-right-tile/analitics-right-tile.component';
import { AnaliticsBottomTileForSubIndustryComponent } from './analitics/components/analitics-bottom-tile-for-subindusry/analitics-bottom-tile-for-subindusry.component';
import { LoginComponent } from './core/authentication/login/login.component';
import { AutenticationGuard } from './core/authentication/authentication-guard.service';


const routes: Routes = [
  {
    path: 'p',
    //loadChildren: () => import('./first-page/first-page.module').then(module => module.FirstPageModule)
    component: SharedComponent,
    children: [
      {
        path: 'pathName',
        component: OutletComponent,
        outlet: 'outletName'
      },
    ]
  },
  {
    path: 'first-page',
    loadChildren: () => import('./first-page/first-page.module').then(module => module.FirstPageModule)
  },
  {
    path: 'pathName',
    component: OutletComponent,
    outlet: 'outletName'
  },
  // {
  //   path: '',
  //   component: SharedComponent,
  //
  // },
  {
    path: '',
    redirectTo: 'first-page',
    pathMatch: 'full'
  },

];

const appRoutes: Routes = [

  { path: '', component: LoginComponent },
  {
    path: 'main', component: FirstPageComponent,
    canActivate: [AutenticationGuard],
    children:
      [
        { path: '', component: ChildPrimaryComponent },

        {
          path: 'clients-top-tile', component: ClientsComponent,
          outlet: 'top-tile-outlet',
          data: { animation: 'clients-top-tile' }
        },
        {
          path: 'clients-bottom-tile/:companyId', component: ClientInfoTileComponent,
          outlet: 'bottom-tile-outlet',
          data: { animation: 'clients-bottom-tile' }
        },
        {
          path: 'clients-right-tile/:companyId', component: ClientInfoResultsTileComponent,
          outlet: 'right-tile-outlet',
          data: { animation: 'clients-right-tile' }
        },
        {
          path: 'clients-right-tile', component: ClientInfoResultsTileComponent,
          outlet: 'right-tile-outlet',
          data: { animation: 'clients-right-tile' }
        },




        {
          path: 'analitics-top-tile/:activityType', component: AnaliticsTopTileComponent,
          outlet: 'top-tile-outlet',
          data: { animation: 'analitics-top-tile' }
        },
        {
          path: 'analitics-bottom-tile/:activityType', component: AnaliticsBottomTileComponent,
          outlet: 'bottom-tile-outlet',
          data: { animation: 'analitics-bottom-tile' }
        },
        {
          path: 'analitics-bottom-tile-for-subindustry/:activityType/:industry', component: AnaliticsBottomTileForSubIndustryComponent,
          outlet: 'bottom-tile-outlet',
          data: { animation: 'analitics-bottom-tile-for-subindustry' }
        },
        {
          path: 'analitics-right-tile/:activityType', component: AnaliticsRightTileComponent,
          outlet: 'right-tile-outlet',
          data: { animation: 'analitics-right-tile' }
        },
        {
          path: 'analitics-right-tile-for-subindustry/:activityType/:industry', component: AnaliticsRightTileForSubIndustryComponent,
          outlet: 'right-tile-outlet',
          data: { animation: 'analitics-right-tile-for-subindustry' }
        },


        {
          path: 'general-top-tile', component: TopTileComponent,
          outlet: 'top-tile-outlet',
          data: { animation: 'general-top-tile' }
        },
        {
          path: 'general-bottom-tile', component: BottomTileComponent,
          outlet: 'bottom-tile-outlet',
          data: { animation: 'general-bottom-tile' }
        },
        {
          path: 'general-right-tile', component: RightTileComponent,
          outlet: 'right-tile-outlet',
          data: { animation: 'general-right-tile' }
        },

      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
