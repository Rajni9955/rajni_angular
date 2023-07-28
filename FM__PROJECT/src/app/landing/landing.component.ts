import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  uName! : string;

constructor (private router : Router, private dataService : DataService){

}

ngOnInIt(){
  this.uName = this.dataService.userName;
}

  login(){
    this.router.navigateByUrl('/login');
  }

  studentActivity(){
    this.router.navigateByUrl('/student/studentActivity')
  }
  directives(){
    this.router.navigateByUrl('directives');
  }

  lifiCycleHooks(){
    this.router.navigateByUrl('lifeCycleHooks');
  }

  Parent(){
    this.router.navigateByUrl('parent');
}

// Child(){
//   this.router.navigateByUrl('child');
// }


}
