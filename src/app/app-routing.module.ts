import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'first-page',
    loadChildren: () => import('./first-page/first-page.module').then(module => module.FirstPageModule)
  },
  {
    path: '',
    redirectTo: 'first-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
