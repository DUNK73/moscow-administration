import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AmountPipe } from './amount.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AmountPipe
  ],
  exports: [
    AmountPipe
  ]
})
export class PipesModule { }
