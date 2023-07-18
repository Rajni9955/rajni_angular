import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentActivityComponent } from './student-activity/student-activity.component';
import { StudenDemoComponent } from './studen-demo/studen-demo.component';


@NgModule({
  declarations: [
    StudentActivityComponent,
    StudenDemoComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
