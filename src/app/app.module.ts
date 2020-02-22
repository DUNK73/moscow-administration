import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticationGuard } from './core/authentication/authentication-guard.service';
import { CoreInterceptorService } from './core/interceptors/core-interceptor.service';
import { LoginComponent } from './core/authentication/login/login.component';
import { AuthenticationModule } from './core/authentication/authentication.module';
import { FirstPageModule } from './first-page/first-page.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    AuthenticationModule,
    FirstPageModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CoreInterceptorService,
      multi: true
    },
    AutenticationGuard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
