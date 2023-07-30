import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { CommonapicallService } from '../student/commonapicall.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  uName! : string;
  getApiCallResponse: any;
  
constructor (private router : Router, private dataService : DataService,
  public commonapicallService : CommonapicallService){

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

Child(){
  this.router.navigateByUrl('child');
}

apicalls(){
  this.router.navigateByUrl('student/apiCall');
}

getApiCall(){
  console.log('get api call');
  let endpoint = 'admin';
  this.commonapicallService.getApiCall(endpoint).subscribe(Response=>{
    this.getApiCallResponse = Response;
  })

  console.log(" this.getApiCallResponse",  this.getApiCallResponse);
  
}
form(){
  this.router.navigateByUrl('form');
}

}
