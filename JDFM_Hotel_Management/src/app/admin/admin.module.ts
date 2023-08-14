import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminsuccessComponent } from './adminsuccess/adminsuccess.component';
import { SharedModule } from '../common/shared/shared.module';


@NgModule({
  declarations: [
    AdminhomeComponent,
    AdminsignupComponent,
    AdminsuccessComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
