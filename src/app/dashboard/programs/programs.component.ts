import { Component, HostListener } from '@angular/core';
import { ProgramsService } from '../services/programs.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent {

  public queryParams_data: any = {};
  public sortBy: string = 'start_date';
  public onScrollNewProgramData: any;
  public onScrollNewProgramData_01: any;
  private loading = false;

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
  subscribeOnes: any;
 public subscription!: Subscription 

    constructor(  private programsApi: ProgramsService,
                  private actiRouter: ActivatedRoute,
                  private router: Router               ) { }


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

    this.get_Filter_Sorting_Data()

  }

// On scoll API call  
  @HostListener('window:scroll', ["$event"])
  onScroll(event:Event) {
    const scrollThreshold = 500;
    const windowHeight = window.innerHeight;
    const scrollPostion = window.scrollY;
    const documentHeight = document.body.offsetHeight;

    if (scrollPostion + windowHeight >= documentHeight - scrollThreshold && !this.loading) {
    
      this.loading = true; 
    
      if (this.subscription) {
        this.subscription.unsubscribe();
      }

      this.subscription = this.programsApi.scrollApi().subscribe((res: any) => {
        console.log(res.DATA.programs)
        this.onScrollNewProgramData = res.DATA.programs
        console.log(res.DATA.programs.category_details)
        res.DATA.programs.map((res:any)=> {
          console.log(res.trainerData.photo)
        })

        this.programsCard.push(this.onScrollNewProgramData)
        if (this.subscription) {
          this.subscription.unsubscribe();
        }
          this.programsApi.scrollApi_2().subscribe((res:any) => {
            console.log(res.DATA.programs)
            this.onScrollNewProgramData_01 =res.DATA.programs;
             this.programsCard.push(this.onScrollNewProgramData)    

             if (this.subscription) {
              this.subscription.unsubscribe();
            }


          })
      })

    }
  }
 

  get_Filter_Sorting_Data() {
    this.actiRouter.queryParams.subscribe((res: any) => {
      console.log(res)
    })
  }

  get_Programs_Data() {
    this.programsApi.getProgramsPage(this.queryParams_data, this.sortBy).subscribe((res: any) => {
      this.programsCard = res.DATA.programs
        
      console.log("queryParams_data =",this.queryParams_data)
      console.log("sortBy =",this.sortBy)  // here "sortBy" variable have value "satrt_Date" which store in variable 
      console.log("",res)
    })
  }

  // On click filters checkBox

  dataFillters(event: any, key: any,) {
    console.log("Event =", event.target.value, key)
    console.log("check =", event.target.checked);

    let parameterValue: any = {}
    this.queryParams_data = parameterValue
     console.log(parameterValue)

    const selected_Check_Box = (this.programs_Data.controls['selected_Check_Box'] as FormArray)
    // let  checked_Value  : boolean = true
    console.log(selected_Check_Box) // ahi 1-"key" & 2-"slug.value"  


    if (event.target.checked === true) {
      selected_Check_Box.push(new FormControl({ [key]: event.target.value }));
      console.log([key])
      console.log([key] = event.target.value)
      console.log(selected_Check_Box)

    } else {
      const index = selected_Check_Box.controls.findIndex(x => x.value[key] === event.target.value);
      selected_Check_Box.removeAt(index)
      console.log(selected_Check_Box)
    }

    this.programs_Data.value.selected_Check_Box.forEach((param: any) => {
      console.log(param)  // here we get object 

      const [key] = Object.keys(param);  // here we get title ( " here object.key convert value in array " ) 
      console.log([key])       // here we get title in Array

      const value = param[key];
      console.log(value);

      if (parameterValue[key]) {
        parameterValue[key] += `,${value}`
      } else {
        parameterValue[key] = value
      };

    });

    this.router.navigate(['./programs'], { queryParams: parameterValue })  // here queryParams add at url  - 
                                                                     // - with key-value pair end add ? at end 
    this.get_Programs_Data()
  }

  shortingPrograms(e: any) {
    console.log(e.target.value)
    this.sortBy = e.target.value;
    this.get_Programs_Data()
  }

// Onclick card card detail page showes
  cardDetails(params:any){
    console.log(params)
    this.router.navigate(['./programs',params])
  }

}


