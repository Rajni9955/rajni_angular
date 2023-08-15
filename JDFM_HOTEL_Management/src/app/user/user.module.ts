import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { SharedModule } from '../common/shared/shared.module';


@NgModule({
  declarations: [
    UserhomeComponent,
    UsersignupComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
