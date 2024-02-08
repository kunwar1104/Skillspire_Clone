import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-materix',
  templateUrl: './materix.component.html',
  styleUrls: ['./materix.component.scss']
})
export class MaterixComponent {

  materix01_Form : FormGroup<any> |any ;
  materix02_Form : FormGroup<any> |any ;
// Materix 1
  materix_1_Row_1_value :any ;
  materix_1_Col_1_value :any ;
  materix_1 : any ;

// Materix 2
  materix_2_Col_1_value: any;
  materix_2_Row_1_value: any;
  materix_2 : any ;

  eroor_Message : string | any;

  constructor( private fb : FormBuilder ) {};

  ngOnInit(): void {
    
  //   Materix 1 Form 
  this.materix01_Form = this.fb.group({
    materix01_row : ['', Validators.required],
    materix01_col : ['', Validators.required],
    materix02_row : ['', Validators.required],
    materix02_col : ["", Validators.required]
  })
  };

  public intileLize_Metrix(row :any, col:any){
     console.log(row, col)
     const materix :any[] = []
     console.log("materix = ",materix)
       
     for(let i = 0; i < row; i++ ) {
         const row :any[] = [];
         
         for (let j = 0 ; j < col ; j++) {
          row.push(new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]))
         }
         materix.push(row);
     }
     return materix;
  }

  materix_submit(){
    console.log(this.materix01_Form.value)
    // this.materix_1_Row_1_value = (this.materix01_Form.controls.materix01_row as FormArray);
    this.materix_1_Row_1_value = this.materix01_Form.get("materix01_row").value ;
    this.materix_1_Col_1_value = this.materix01_Form.get('materix01_col').value ;
    this.materix_2_Row_1_value = this.materix01_Form.get('materix02_row').value ;
    this.materix_2_Col_1_value = this.materix01_Form.get('materix02_col').value ;

    console.log("materix_1_Row_1_value",this.materix_1_Row_1_value);
    console.log("materix_1_Col_1_value",this.materix_1_Col_1_value);
    console.log("materix_2_Row_1_value",this.materix_2_Row_1_value);
    console.log("materix_2_Col_1_value",this.materix_2_Col_1_value);      
     
    this.materix_1 = this.intileLize_Metrix(this.materix_1_Row_1_value, this.materix_1_Col_1_value);
    this.materix_2 = this.intileLize_Metrix(this.materix_2_Row_1_value, this.materix_2_Col_1_value);
   
    console.log("materix_1 =",this.materix_1)
    console.log("materix_2 =",this.materix_2)
    // if(this.materix_1_Col_1_value === this.materix_1_Col_1_value ){
       
    // }
    // else{
    //   this.eroor_Message = "Invalid Materix"
    // }
    

  };


 

   
  

}
