import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreInterceptorService } from './core/interceptors/core-interceptor.service';
import { ChildComponent } from './shared/ChildComponent/ChildComponent.component';
import { ChildPrimaryComponent } from './shared/ChildPrimaryComponent/ChildPrimaryComponent.component';
import { ChildSecondaryComponent } from './shared/ChildSecondaryComponent/ChildSecondaryComponent.component';
import { RootPrimaryComponent } from './shared/RootPrimaryComponent/RootPrimaryComponent.component';
import { RootSecondaryComponent } from './shared/RootSecondaryComponent/RootSecondaryComponent.component';
import { SharedComponent } from './shared/shared.component';
import { AutenticationGuard } from './core/authentication/authentication-guard.service';


@NgModule({
  declarations: [
    AppComponent,

    RootPrimaryComponent,
    RootSecondaryComponent,
    ChildComponent,
    ChildPrimaryComponent,
    ChildSecondaryComponent,

    SharedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
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
