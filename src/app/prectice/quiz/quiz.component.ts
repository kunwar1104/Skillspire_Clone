import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  demo :any
  quiz_Data :any = {} ;
  subject: any= {};
  questions :any=[];
  question_One : any = {} ;
  questions_array  :any[] | any = {} ;
  id: number = 0;   // for Next and Previous Button

  que_id: number = 1
  quiz_Form: FormControl<any> | any;
  is_Show_Quiz: boolean = false ;
  is_hide_start_Quiz_btn : boolean = true ;
  times: any;

  count_down_time_min : number = 1; 
  count_down_time_sec :number = 60;
  time_Over_Message : string |any;
  is_Time_Over : boolean = false;
  options_as_Key: any[] = [];

  answers_By_User : any = [] ; 
  is_Time_Over_Message : boolean = false ;
  is_Hide_Quiz_On_Time_Out : boolean= false ;
  is_Show_Finish_Btn : boolean = false ;

  is_Quiz_Finish_By_User : boolean = false ;

  constructor ( private http : HttpClient   ){};
  
  public  ngOnInit(): void {
      
    this.quiz_Form = new FormGroup({
    options : new FormControl('',[Validators.required]),
   
    });

  console.log(this.quiz_Form.value)
  console.log(this.quiz_Form.options)  


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
         console.log("res.result.result.list['21'].sections.A.questions.question=",res.result.result.list['21'].sections.A.questions.question );




         this.quiz_Data = res.result.result ;
         this.subject = res.result.result.list['21'].subject_name ;
         console.log(this.subject)
         this.questions_array = res.result.result.list['21'].sections.A.questions ;
          console.log(this.questions_array)
         
         this.questions = this.questions_array[this.id];
        //  let option = this.questions_array[this.id]["option"] ;


          console.log("this.questions_array =",this.questions_array.option1)
          console.log("this.questions_array.index =",this.questions)

         // this for all questions loop 
        //  this.questions_array.forEach((res: any) => {
        //     console.log(res)
        //  })

     })

        // this.count_Down();
  };

  // Previous Button
  previous(id: number) {
   
    if (this.id > 0) {
      this.que_id--;
      this.id--;
      this.questions = this.questions_array[this.id];
      this.is_Show_Finish_Btn = false;

    }
    // this.quiz_Form.get('options').reset();

  }
  // Next Button
  next( id:number) {
    this.quiz_Form.get('options').reset();
    
    if (this.id < this.questions_array.length - 1) {
      this.que_id++;

      this.id++;
      console.log("this.id = ",this.id)
      this.questions = this.questions_array[this.id];

    }

    if(this.id > 8){
      console.log("tast ")
      this.is_Show_Finish_Btn = true;
      console.log(this.id)
      console.log("tast ")

    }
    else {
      this.is_Show_Finish_Btn = false;

    }
    this.quiz_Form.get('options').reset();
  };

  startTimer(){

    this.is_Show_Quiz = true ;

    this.is_hide_start_Quiz_btn = false;

    this.is_Time_Over = true;

    this.is_Hide_Quiz_On_Time_Out = true

  
    // here we store the options as key 
    this.options_as_Key  =  Object.keys(this.questions)
    console.log("options_as_Key =",this.options_as_Key)
    console.log(this.options_as_Key[4])
    console.log(this.options_as_Key[5])
    console.log(this.options_as_Key[6])
    console.log(this.options_as_Key[7])
  
    this.count_Down();
  }
 
  count_Down(){

   let my_Interval : any =   setInterval(() => {
      this.count_down_time_sec--;

      if (this.count_down_time_sec === 0 ) {

          this.count_down_time_min--; 
          this.count_down_time_sec = 60 ;
      }
      if (this.count_down_time_min === -1) {
        this.time_Over_Message = "Exam time Over"
        this.is_Time_Over = false;
        this.is_Time_Over_Message = true;
        this.is_Hide_Quiz_On_Time_Out = false;
            this.count_down_time_min === -1
            my_Interval = clearInterval(my_Interval) 
            console.log("this.count_down_time_min =",this.count_down_time_min)
  
      }

      // if(this.count_down_time_min === 0  ) {
      //   if(this.count_down_time_sec === 0)  {
      //     this.time_Over_Message = "Exam time Over"
      //     this.is_Time_Over = false;
    
      //     my_Interval = clearInterval(my_Interval) 
      //         console.log("this.count_down_time_min =",this.count_down_time_min)
      //   }
          
      // }
    },1000);

    if(this.count_down_time_min === 0 &&  this.count_down_time_sec === 0) {
      this.is_Show_Quiz = false ;

    }

  }

  ans_by_user(e:any,ans:any,id:any){
    console.log("e.target.value",e.target.value)
    console.log("ans",ans)
    console.log("id",id)

    this.answers_By_User.push([{"ID ":id},{"Ans":ans}]);
    console.log(this.answers_By_User)
      
   };

   finish_Quiz() {
    this.is_Hide_Quiz_On_Time_Out = false ;

    this.is_Quiz_Finish_By_User = true ;

    this.answers_By_User
    console.log(this.answers_By_User)
   }
}
