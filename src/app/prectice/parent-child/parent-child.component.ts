import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss']
})
export class ParentChildComponent {
   
  Counter : number = 5;

  


  Increment(){
     this.Counter++;
  }

  Decrement() {
     this.Counter--;
  }
}
