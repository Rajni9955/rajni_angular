import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-studen-demo',
  templateUrl: './studen-demo.component.html',
  styleUrls: ['./studen-demo.component.css']
})
export class StudenDemoComponent {
 constructor(private router: Router){

 }
  back(){
    this.router.navigateByUrl('landing');
  }
}
