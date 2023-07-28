import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StoringdataService } from '../storingdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 data! : string;
 @Input() dataFromParent : any;
 @Output() dataFromChild = new EventEmitter <any>;
 

  constructor(public storingdataService : StoringdataService, private router :Router){

   }

ngOnChanges(){
  console.log('ngOnChange');
  
}

ngOnInit(){
  console.log('ngOnInit');
  
}

ngDoCheck(){
  console.log('ngDoCheck');
  
}

ngAfterContentInit(){
  console.log('ngAfterContentInit');
  
}

ngAfterContentChecked(){
  console.log('ngAfterContentChecked');
  
}

ngAfterViewInit(){
  console.log('ngAfterViewInit');
  
}

ngAfterViewChecked(){
  console.log('ngAfterViewChecked');
  
}

ngnDistroy(){
  console.log('ngnDistroy');
  
}

   get(){
    let data = this.storingdataService.setData;
    console.log('data', this.data);
    
   }
  
   sendData(data : any){
    console.log(data.target.value);
    let value = data.target.value;
    this.dataFromChild.emit(value);
    
   }

   back(){
    this.router.navigateByUrl('landing');
   }

}
