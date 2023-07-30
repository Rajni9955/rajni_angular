import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DirectivesAngularComponent } from './directives-angular/directives-angular.component';
import { LificyclehooksComponent } from './lificyclehooks/lificyclehooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from './shared/shared.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent,
    DirectivesAngularComponent,
    LificyclehooksComponent,
    ParentComponent,
    ChildComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
