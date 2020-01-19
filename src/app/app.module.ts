import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildSecondaryComponent } from './shared/ChildSecondaryComponent/ChildSecondaryComponent.component';
import { RootPrimaryComponent } from './shared/RootPrimaryComponent/RootPrimaryComponent.component';
import { RootSecondaryComponent } from './shared/RootSecondaryComponent/RootSecondaryComponent.component';
import { ChildComponent } from './shared/ChildComponent/ChildComponent.component';
import { ChildPrimaryComponent } from './shared/ChildPrimaryComponent/ChildPrimaryComponent.component';
import { SharedComponent } from './shared/shared.component';
import { CoreInterceptorService } from './core/interceptors/core-interceptor.service';


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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CoreInterceptorService,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
