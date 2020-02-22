import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation-errors-viewer',
  templateUrl: './validation-errors-viewer.component.html',
  styleUrls: ['./validation-errors-viewer.component.css']
})
export class ValidationErrorsViewerComponent implements OnInit {

  @Input()
  public errors: ValidationErrors;
  // @Input()
  // public control: AbstractControl;

  constructor() { }

  ngOnInit() {
  }

}
