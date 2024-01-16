import { Component } from '@angular/core';
import { ProgramsService } from '../services/programs.service';
import { FormArray, FormGroup } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent {
  
  programs_Data: FormGroup | any;
   fillterTitle : any ;
   fillterSubTitle: any[] = [] ;
   programsCard : any ;
   programsData : any;

  //  object: { [key: number]: string; } =  this.fillterSubTitle 

  constructor( private programs : ProgramsService,  ) {}

  
  ngOnInit() {

    this.programs_Data = new FormGroup({
      program: new FormArray([])
    })
    
        
    this.programs.programsFillters().subscribe((data: any) => {
      console.log(data)
      // console.log(data.DATA.filters)
       this.fillterTitle = data.DATA.filters
         this.fillterTitle.name
         console.log(this.fillterTitle.name)
        
            console.log(this.fillterTitle)
            this.fillterTitle.map((data : any) => {
                  console.log(data)
                  console.log(data.key)
                  if(data.key ){
                  data.key.map((m:any) => {
                      m.key[m.key]
                      console.log(m.key[m.key])
                  })
                  }
                  this.fillterSubTitle = data.key
                  console.log(this.fillterSubTitle)
            })
            })

            this.programs.allPrograms().subscribe((data:any) => {
              console.log(data)
              console.log(data.DATA.programs)
              this.programsCard = data.DATA.programs
              console.log(this.programsCard.title)
              this.programsCard.map((data: any) => {
                 console.log(data)
                 console.log(data.title)
                 this.programsData = data 
              })
            })
  }

  dataFillters(): void{
    this.programs.programsFillters().subscribe((data: any) => {
        console.log(data)
        this.fillterTitle = data

    })
  }
}
