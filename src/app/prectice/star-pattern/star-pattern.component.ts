import { Component } from '@angular/core';

@Component({
  selector: 'app-star-pattern',
  templateUrl: './star-pattern.component.html',
  styleUrls: ['./star-pattern.component.scss']
})
export class StarPatternComponent {

  ngOnInit(): void {

    console.log("%c Training pattern from left side", "font-weight: italic; font-weight: bold;  ");
    this.trianagle_Pattern_From_Left_Side();

    console.log("Training pattern from right side");
    this.trianagle_Pattern_From_Right_Side();

    console.log("Riverse Training pattern from left side ")
    this.revers_trianagle_Pattern_From_Left_Side();

    console.log("Riverse Training pattern from right side ")
    this.revers_trianagle_Pattern_From_Right_Side();

    console.log("Solid Diamond Pattern ")
    this.solid_diamond_Pattern();

    console.log("Loop Prectice");
    this.loop_Prectice();

  };

  trianagle_Pattern_From_Left_Side() {

    let n: number = 5;
    for (let i = 1; i <= n; i++) {
      let str = "*";
      console.log(str.repeat(i));
    }
  }

  trianagle_Pattern_From_Right_Side() {

    let n: number = 5
    for (let i = 1; i <= n; i++) {
      let str = "$";
      let space = " ";
      console.log(space.repeat((n - i)) + str.repeat(i))
    }
  };

  revers_trianagle_Pattern_From_Left_Side() {

    let n: number = 5;

    for (let i = n; i >= 1; i--) {
      let str = "# ";
      console.log(str.repeat(i))
    }
  }

  revers_trianagle_Pattern_From_Right_Side() {

    let n = 5;

    for (let i = n; i >= 1; i--) {

      let str = "*";
      let space = " ";

      console.log(space.repeat(n - i) + str.repeat(i))
    }
  };

  solid_diamond_Pattern() {

    
      let n = 5; 
      for (let i = 1; i <= n; i++) { 
          let str = "*"; 
          let space = ' '; 
          console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
      } 
      for (let i = n - 1; i >= 1; i--) { 
          let str = "*"; 
          let space = ' '; 
          console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
      }

   }

  // Function to print solid diamond star pattern


  // Example usage

  hollow_dimond_Pattern() {

  }

  loop_Prectice() {
     
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    let i, len, text;
    for (i = 0, len = cars.length, text = ""; i < len; i++) {
      text += cars[i] + " " ;
    }
    console.log(text)
    

  }
}
