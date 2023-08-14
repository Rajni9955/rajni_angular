import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserhomeComponent } from './userhome/userhome.component';
import {MatIconModule} from '@angular/material/icon';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';
import { NewhotelregistrationComponent } from './newhotelregistration/newhotelregistration.component';
import { SharedModule } from '../common/shared/shared.module';


@NgModule({
  declarations: [
    UserhomeComponent,
    UsersignupComponent,
    UsersuccessComponent,
    NewhotelregistrationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule,
    SharedModule,
  ]
})
export class UserModule { }
