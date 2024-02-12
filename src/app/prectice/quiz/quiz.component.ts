import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  
  quiz_Data :any = {} ;
  subject: any= {};
  questions :any[]| any;
  question_One : any = {} ;
  questions_array  :any=[] ;
  id: number| number = 0;
 

  constructor ( private http : HttpClient   ){};
  
 public  ngOnInit(): void {
    // this.id;

    this.http.get<any>('assets/db-Quiz-Data.json').subscribe((res:any) => {
         console.log("res =",res)
         console.log("res.result =",res.result);
         console.log("res.result.result =",res.result.result);
         console.log("res.result.result.total_time =",res.result.result.total_time);
         console.log("res.result.result.list =",res.result.result.list);
         console.log("res.result.result.list['21'] =",res.result.result.list['21'] );
         console.log("res.result.result.list['21'].subject_name =",res.result.result.list['21'].subject_name );
         console.log("res.result.result.list['21'].sections =",res.result.result.list['21'].sections );
         console.log("res.result.result.list['21'].sections.A =",res.result.result.list['21'].sections.A );
         console.log("res.result.result.list['21'].sections.A.questions=",res.result.result.list['21'].sections.A.questions );
         console.log("res.result.result.list['21'].sections.A.questions[0]=",res.result.result.list['21'].sections.A.questions[0] );



         this.quiz_Data = res.result.result ;
         this.subject = res.result.result.list['21'].subject_name ;
         this.questions_array = res.result.result.list['21'].sections.A.questions ;
         this.questions = this.questions_array[this.id];


          console.log("this.questions_array =",this.questions_array)
          console.log("this.questions_array.index =",this.questions_array.index)

         // this for all questions loop 
         this.questions_array.forEach((res: any) => {
            console.log(res)
         })

    })
  };


  previous(id: number) {
    console.log(id)
    this.id = id;
    this.id--;
    this.questions[this.id] 

  //   if (this.id > 0) {
  //     this.id--;
  //     this.questions = this.questions_array[this.id];
  // }

  }
  next( id:number) {
    // console.log(id)
    // this.id = id;
    // this.id++;
    // this.questions[this.id] 
    if (this.id < this.questions_array.length - 1) {
      this.id++;
      this.questions = this.questions_array[this.id];
  }

  }
 

}
