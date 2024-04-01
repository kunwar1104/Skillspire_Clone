import { Component, forwardRef } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { first, last, Subscriber } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [{ provide : NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FormComponent), multi: true}]
})
export class FormComponent {

  // reactiveForm : FormGroup | any ;

  constructor() { };

  reactiveForm : any = new FormGroup({
       firstName : new FormControl('',[Validators.required]),
       lastName : new FormControl('',[Validators.required]),
       address: new FormGroup({
        city: new FormControl(),
        street: new FormControl(),
        pincode: new FormControl()
       })
  });

  ngOnInit(): void {
     
    this.reactiveForm.get("firstName")?.valueChanges.subscribe((selectedValue: any) => {
      console.log("First Name Value Changed", )
      console.log("selectedValue = ",selectedValue);
      console.log("Value shows the old first name",this.reactiveForm.get("firstName")?.value)
        
      setTimeout(() => {
        console.log("shows the latest first name",this.reactiveForm.value)
      })
    })

    this.reactiveForm.get("firstName").statusChanges.subscribe((newStatus: any) => {
       console.log(newStatus)
    })
  }
   
  onSubmit() {
    console.log(this.reactiveForm.value)
  }

  setValue(){
     let data : string | any = {

      firstName : "Harshveer",
      lastName : "Chauhan"
     }

     this.reactiveForm.setValue(data)
  }

  setAddress() {
 
    this.reactiveForm.get("address").setValue(
      {
        city: "Bangalore",
        street: "Brigade Road",
        pincode: "600070"
      }
    );
  }
}
