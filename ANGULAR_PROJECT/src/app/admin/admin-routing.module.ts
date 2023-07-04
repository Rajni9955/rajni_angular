import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from '../login/login.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : 'adminLogin', component : AdminLoginComponent},
  {path : 'adminSignUp', component: AdminSignUpComponent},
  {path : '', component : HomeComponent},
  {path : 'admin', loadChildren:()=> import('./admin.module').then(mod=>mod.AdminModule)},
  {path : 'owner', loadChildren:()=> import('./owner/owner.module').then(mod=>mod.OwnerModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
