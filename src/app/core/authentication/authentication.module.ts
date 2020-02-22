import { ComponentsModule } from './../components/components.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

    ComponentsModule,
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthenticationModule { }
