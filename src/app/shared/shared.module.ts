import { OutletComponent } from './outlet/outlet.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    RouterModule
  ],
  declarations: [
    
    OutletComponent,
  ]
})
export class SharedModule { }
