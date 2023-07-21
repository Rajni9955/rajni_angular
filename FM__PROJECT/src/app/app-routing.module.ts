import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DirectivesAngularComponent } from './directives-angular/directives-angular.component';

const routes: Routes = [
  {path : '', component : LandingComponent},
  {path : 'landing' , component : LandingComponent},
  {path : 'login', component : LoginComponent},
  {path : 'signUp', component : SignUpComponent},
  {path : 'directives', component : DirectivesAngularComponent},
  {path : 'student', loadChildren:()=> import('./student/student.module').then(m=>m.StudentModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
