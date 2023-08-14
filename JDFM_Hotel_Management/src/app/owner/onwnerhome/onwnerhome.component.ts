import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onwnerhome',
  templateUrl: './onwnerhome.component.html',
  styleUrls: ['./onwnerhome.component.scss']
})
export class OnwnerhomeComponent {

  constructor(private router : Router){}





  login(){
    this.router.navigateByUrl('owner/ownerHome');
  }


}
