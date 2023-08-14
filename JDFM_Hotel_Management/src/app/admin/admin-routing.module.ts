import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminsuccessComponent } from './adminsuccess/adminsuccess.component';

const routes: Routes = [
  {path : '', component : AdminhomeComponent},
  {path : 'adminHome', component : AdminhomeComponent},
  {path : 'adminSignUp', component : AdminsignupComponent},
  {path : 'adminSuccess', component : AdminsuccessComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
