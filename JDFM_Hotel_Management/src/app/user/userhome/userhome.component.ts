import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent {
  constructor(private location: Location, private router : Router) { }

  navigateBack(): void {
    this.location.back();
  }

  login(){
    this.router.navigateByUrl('user/userHome');
  }











}
