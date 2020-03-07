import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OutletComponent } from './outlet/outlet.component';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    RouterModule,

    PipesModule,
  ],
  declarations: [

    OutletComponent,
  ],
  exports: [
    PipesModule
  ]
})
export class SharedModule { }
