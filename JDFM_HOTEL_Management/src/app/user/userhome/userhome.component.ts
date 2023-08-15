import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent {

 constructor(private router : Router){}

 login(){
  this.router.navigateByUrl('user/userHome');
 }

 back(){
  this.router.navigateByUrl('home');
}

}
