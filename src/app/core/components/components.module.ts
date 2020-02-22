import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ValidationErrorsViewerComponent } from './validation-errors-viewer/validation-errors-viewer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ValidationErrorsViewerComponent
  ],
  exports: [
    ValidationErrorsViewerComponent
  ]
})
export class ComponentsModule { }
