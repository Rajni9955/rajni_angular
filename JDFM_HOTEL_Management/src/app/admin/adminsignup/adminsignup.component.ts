import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss']
})
export class AdminsignupComponent {
  // signUpForm!:FormGroup;

  constructor(private router : Router){}

  //  back(){
  //   this.router.navigateByUrl('home');
  // }

  // submit(){

  // }
}
