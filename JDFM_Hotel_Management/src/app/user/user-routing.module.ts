import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';


const routes: Routes = [
  {path : '', component : UserhomeComponent},
  {path : 'userHome', component : UserhomeComponent},
  {path : 'userSignup', component : UsersignupComponent},
  {path : 'userSuccess', component : UsersuccessComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
