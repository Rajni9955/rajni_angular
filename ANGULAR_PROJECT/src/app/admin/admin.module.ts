import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { StudentLoginComponent } from './student-login/student-login.component';

console.log('admin.module.ts');

@NgModule({
  declarations: [
    StudentLoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
