import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  serverId : number = 10;
  serverStatus  : string =  'i am a serve' ;
  
  allowNewServer = false ;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  getServerStatus(){
    this.serverStatus
  }
}
