import { Component ,Input} from '@angular/core';
import { Observable } from 'rxjs';

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

  // Prectice 5
// link for more details of stackblitz  https://stackblitz.com/edit/angular-observable-tutorial-v2-example-1

obs = new Observable((observer) => {
     console.log("Observable Starts");

     setTimeout(() => { observer.next("1") },1000);
     setTimeout(() => { observer.next("2") },2000);
     setTimeout(() => { observer.next("3") },3000);
    //  setTimeout(() => { observer.error("Error Emited") },3500);  
    // setTimeout(() => { observer.complete() },3000); // sending complete event Observable stops here  

     setTimeout(() => { observer.next("4") },4000);// after error or complete event  this code is never called
     setTimeout(() => { observer.next("5") },5000);

   })  

   ngOnInit(): void {

    this.obs.subscribe(
     {
       next: ( val) => {
         console.log(val)
       },
       error:(error) => {
         console.log('error');
       },
       complete:() => {
         console.log("Complited")
       }
     }
    );

    // for  revars peramid
    let n = 5 

    for ( let i = n ; i >= 1; i--)  {
          let star = "*";
          let space = " ";
          console.log(star.repeat(i));
         
    }
     
    this.demo()
   };

   // ??? ?
   demo() {
    let person =  {
      name : ["Bob", "Smith"], 
      age : 32,
      bio : function() {
  
        console.log(`${this.name[0]} is ${this.age} years old.`);
        console.log("person ssss=",person.name);
  
      },
        
     };
   };

   
  
}


