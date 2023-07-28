import { Component } from '@angular/core';
import { StoringdataService } from '../storingdata.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  setData! : string
  parentData : any;
  name : any;

constructor(public storingdataService : StoringdataService){

}
   set(){
    this.storingdataService.setData = "angel";
   }
}
