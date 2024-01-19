import { Component } from '@angular/core';
import { ProgramsService } from '../services/programs.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent {

  public queryParams_data : any = {};
  public  sortBy:string='start_date';

  programs_Data: FormGroup | any;
  fillterTitle: any;
  fillterSubTitle: any[] = [];
  programsCard: any;
  programsData: any;
  sortIng: any[] = [];
  //  object: { [key: number]: string; } =  this.fillterSubTitle 
  a: any | string
  b!: any;
  data_Programs: any;

  constructor( private programsApi: ProgramsService,
               private actiRouter: ActivatedRoute,
               private router :Router
  ) { }


  ngOnInit() {
    this.get_Programs_Data()

    this.programs_Data = new FormGroup({
      selected_Check_Box: new FormArray([])
    })


    // for shorting and filtering

    this.programsApi.programsFillters().subscribe((data: any) => {
      console.log(data)
      // console.log(data.DATA.filters)
      this.fillterTitle = data.DATA.filters
      this.sortIng = data.DATA.filters
      this.fillterTitle.name
      console.log(this.fillterTitle)
      this.fillterTitle.map((data: any) => {
        console.log(data)
        console.log(data.key)
      })
    })
// =====================================================
              // for all card details
// =====================================================

    // this.programsApi.allPrograms().subscribe((data: any) => {
    //   console.log(data)
    //   console.log(data.DATA.programs)
    //   this.programsCard = data.DATA.programs
    //   this.programsCard.map((data: any) => {

    //   })
    // })
  //  this.programsApi.getProgramsPage(this.a,this.b ).subscribe((res:any) => {
  //             this.programsCard = res.DATA.programs


  //  })
    this.get_Filter_Sorting_Data()

  }

  get_Filter_Sorting_Data() {
    this.actiRouter.queryParams.subscribe((res: any) => {
    
      console.log(res)
    })
  }

  get_Programs_Data() {
    this.programsApi.getProgramsPage(this.queryParams_data,this.sortBy).subscribe(( res :any) => {
      this.programsCard = res.DATA.programs
      console.log(this.queryParams_data, this.sortBy)
    })
  }

// On click filters checkBox

  dataFillters(event: any, key: any, ) {
    console.log("Event =", event.target.value, key)
    console.log("check =", event.target.checked);

    let parameterValue : any = {}
    this.queryParams_data = parameterValue

      console.log(parameterValue)
      const selected_Check_Box = (this.programs_Data.controls['selected_Check_Box'] as FormArray)
      // let  checked_Value  : boolean = true
      console.log(selected_Check_Box) // ahi 1-"key" & 2-"slug.value"  


      if (event.target.checked === true) {
        selected_Check_Box.push(new FormControl({[key]: event.target.value }));
        console.log([key])
        console.log(selected_Check_Box)

      } else {
          const index = selected_Check_Box.controls.findIndex(x => x.value[key] === event.target.value);
          selected_Check_Box.removeAt(index)
          console.log(selected_Check_Box)
       }
        this.programs_Data.value.selected_Check_Box.forEach((param :any) => {
            console.log(param)
            
            const [key] = Object.keys(param);  // here we get title 
            console.log([key])

            const value = param[key];
            console.log(value);

          if(parameterValue[key]) {
            parameterValue[key] += `,${value}`
          } else {
            parameterValue[key] = value
          };

        });

        this.router.navigate(['./programs'], {queryParams: parameterValue})

        this.get_Programs_Data()
  }
   
  shortingPrograms(e:any){
     console.log(e.target.value)
     this.sortBy = e.target.value;
     this.get_Programs_Data()
  }


}
