import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDemoComponent } from '../student/student-demo/student-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NumbersOnlyDirective } from '../student/numbers-only.directive';



@NgModule({
  declarations: [
    StudentDemoComponent,
    NumbersOnlyDirective,
    NumbersOnlyDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],

exports: [
  StudentDemoComponent,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  NumbersOnlyDirective,

]
})
export class SharedModule { }
