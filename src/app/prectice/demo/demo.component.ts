import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
 

  serverId : number = 10;
  serverStatus  : string =  'i am a serve' ;
  
  allowNewServer = false ;
  title = 'Component Intigration'
  Counter = 5; 

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  getServerStatus(){
    this.serverStatus
  }

  increment() {
   this.Counter++ ;
  }

  decrement(){
  this.Counter-- ;
  }
}
