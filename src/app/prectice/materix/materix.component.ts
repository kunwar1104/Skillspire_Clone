import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { NotificationService } from 'src/app/shared/notification/notification.service';

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
// For Materix Multiplication 
  materix_1_Value : any[][] = [];
  materix_2_Value : any[][] = [];
  result_Materix : any;

  eroor_Message : string | any;
  isHide : boolean = false; 

  constructor( private fb : FormBuilder,
               private notification: NotificationService,
                ) {};

  ngOnInit(): void {
    
  //   Materix Form 
  this.materix01_Form = this.fb.group({
    materix01_row : ['', Validators.required],
    materix01_col : ['', Validators.required],
    materix02_row : ['', Validators.required],
    materix02_col : ["", Validators.required]
  })
  };

  resetForm(){
    this.materix01_Form.reset();
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
    
    if(this.materix_1_Col_1_value !== this.materix_2_Row_1_value ){
      this.eroor_Message = "Invalid Materix"
      this.notification.showNotification( this.eroor_Message, "danger",true, 2000)
    }
    else{
      this.materix_1 = this.intileLize_Metrix(this.materix_1_Row_1_value, this.materix_1_Col_1_value);
    this.materix_2 = this.intileLize_Metrix(this.materix_2_Row_1_value, this.materix_2_Col_1_value);
    console.log("no error materix will run")
    this.isHide = true ; 
    }

    console.log("materix_1 =",this.materix_1);
    console.log("materix_2 =",this.materix_2);
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

//  Multiply the materix
 multiply_Materix(){

  // this.materix_1 = [];
  // this.materix_2 = [];

  // For Materix 1
  this.isHide = true;

  for(let i= 0; i < this.materix_1_Row_1_value; i++ ) {
      const row = [];

    for (let j= 0; j < this.materix_1_Col_1_value; j++) {
         
      row.push(this.materix_1[i][j].value)
    }
    this.materix_1_Value.push(row);
    console.log(this.materix_1_Value);
  };


  for(let i= 0; i < this.materix_2_Row_1_value; i++ ) {
    const row = [];

    for (let j= 0; j < this.materix_2_Col_1_value; j++) {
        
      row.push(this.materix_2[i][j].value)
    }
      this.materix_2_Value.push(row);
      console.log(this.materix_2_Value);
   };

   this.result_Materix =  this.calculate_Materix_Multiplication(this.materix_1_Value,this.materix_2_Value)

 }
   
 private calculate_Materix_Multiplication(materix_1: any[][], materix_2: any[][]) {

  const row_1 = materix_1.length ; 
  const colums1 = materix_1[0].length;

  console.log(" row_1 =  ", row_1)
  console.log("materix_1[0] = ",materix_1[0].length);

  const row_2 = materix_2.length ; 
  const colums2 = materix_2[0].length;

  console.log("row_2 = ", row_2 )
  console.log(materix_2[0].length);


  const result :any[][] = [];

  for (let i  = 0 ; i <row_1 ; i++)  {
      const row = [];
    for( let j = 0 ; j <colums2; j++) {
       let sum = 0;
      for( let k = 0 ; k < row_2 ; k++) {
         sum += materix_1[i][k] * materix_2[k][j];

      }
      row.push(sum);
    }
    result.push(row);
  }
  console.log(result);
  return result



 }  

}
