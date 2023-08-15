import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';

const routes: Routes = [
  {path : '', component : AdminComponent},
  {path : 'adminHome', component : AdminComponent},
  {path : 'adminSignup', component : AdminsignupComponent},
  // {path : 'adminSuccess', component : AdminsuccessComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
