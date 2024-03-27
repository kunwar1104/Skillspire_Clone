import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges  } from "@angular/core";

@Component({
    selector: 'children-component',
    template: ` <h2>Child Component</h2>
                   current count for parent to child data  is {{count}} 
                   <br>
                   <button (click)="incriment()">Incriment</button>
                   <button (click)="decrement()">Decrement</button>
                   <br>
                   current count for child to parent  data is {{count1}}
                   `,
})

export class ChildrenComponent implements OnChanges {

    

    constructor () { }
// =================================================================
               // " Parent to child data Pass "   
// =================================================================

    @Input() public count!: number  ;


    // for child to parent data pass 
    @Output()  countChanged: EventEmitter<number> = new EventEmitter();
    count1 : number = 5 ;
     

    set counts(count : number ){
        this.count = count
    }

    get counts(): number {
       
        return this.count
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        
        for (let property in changes) {
           
            if(property === 'count') {
               
                console.log("Previous", changes[property].previousValue);
                console.log("Current", changes[property].currentValue);
                console.log("firstChange :", changes[property].firstChange )
            }
        }
    }
       
    // =================================================================
        // " Parent to child data Pass "   
    // =================================================================
      
    incriment() {

       this.count1++;
       this.countChanged.emit(this.count1);
    }

    decrement(){

       this.count1--;
       this.countChanged.emit(this.count1);
    }
}