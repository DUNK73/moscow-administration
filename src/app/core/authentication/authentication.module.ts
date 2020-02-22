import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,

    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthenticationModule { }
