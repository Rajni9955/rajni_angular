import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { OnwnerhomeComponent } from './onwnerhome/onwnerhome.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';

const routes: Routes = [
  {path : '', component : OnwnerhomeComponent},
  {path : 'ownerHome', component : OnwnerhomeComponent},
  {path : 'ownerSignup', component : OwnersignupComponent},
  {path : 'ownerSuccess', component : OwnersuccessComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
