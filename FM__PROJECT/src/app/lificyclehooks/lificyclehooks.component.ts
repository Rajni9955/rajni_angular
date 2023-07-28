import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lificyclehooks',
  templateUrl: './lificyclehooks.component.html',
  styleUrls: ['./lificyclehooks.component.css']
})
export class LificyclehooksComponent {
@Input() test :any

// constructor : 1. it is not a lifecycle hook.
              // 2. constructor will trigger first when components gets initilized.
              // 3. will use constructor to inject depedencies.
constructor(){
  console.log('constructor.......');
  
}

ngOnChange(){
  console.log('ngOnChange....');
  }


ngOnInit(){
  console.log('ngOnInit.....');
  
}

ngDoCheck(){
  console.log('ngDoCheck........');
  
}



}
