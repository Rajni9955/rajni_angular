import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { SharedModule } from '../common/shared/shared.module';


@NgModule({
  declarations: [
    AdminComponent,
    AdminsignupComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,

  ]
})
export class AdminModule { }
