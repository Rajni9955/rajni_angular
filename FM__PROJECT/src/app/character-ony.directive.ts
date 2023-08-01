import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharacterOny]'
})
export class CharacterOnyDirective {


  constructor(private elementRef : ElementRef ) { }

  @HostListener('input, [$event]')
  
   inputChange(){
    console.log('directive calling');
    let initialInputBoxValue = this.elementRef.nativeElement.value;
   console.log(initialInputBoxValue);
   this.elementRef.nativeElement.value = initialInputBoxValue.replace(/[^a-zA-Z ]*/g, '')
   
  }

  }




