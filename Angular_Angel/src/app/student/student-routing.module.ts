import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentActivityComponent } from './student-activity/student-activity.component';
import { StudenDemoComponent } from './studen-demo/studen-demo.component';

const routes: Routes = [
  {path : 'studentActivity', component : StudentActivityComponent},
  {path : 'studentDemo', component: StudenDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
