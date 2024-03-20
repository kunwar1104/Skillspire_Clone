import { Component } from '@angular/core';
import { ProgramsService } from './../../services/programs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
  
  public cardDetails : any = {}  ;
  public session_Details : any ;

  constructor( public courseAPI : ProgramsService, 
               public active_route: ActivatedRoute
    
    ){}

  ngOnInit(): void {

     this.active_route.paramMap.subscribe((params) => {
      console.log(params)
      let params_Data = params.get('id') ;
       
      this.courseAPI.programsData(params_Data).subscribe((res:any)=> {
               console.log(res)
           this.cardDetails = res.DATA.program ; 
           this.session_Details = res.DATA.program.session_details
           console.log(this.session_Details)
      })
     })



    // this.courseAPI.allPrograms().subscribe((res:any) => {
    //   console.log(res)
    // })
    
  }
}
