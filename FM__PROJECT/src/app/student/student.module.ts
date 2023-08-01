import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentActivityComponent } from './student-activity/student-activity.component';
import { StudentDemoComponent } from './student-demo/student-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ApicallComponent } from './apicall/apicall.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations:[
    StudentActivityComponent,
    ApicallComponent,
    
  
    // StudentDemoComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  exports : [
    StudentDemoComponent,
    StudentRoutingModule,
    SharedModule,
   

  ]

})
export class StudentModule { }
