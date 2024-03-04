import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { concat } from 'rxjs';
import { QuizService } from './quiz.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  demo :any
  quiz_Data :any = {} ;

  selected_subject = "";
  selected_section = "";
  selected_question = "";

  subject_21: any= {};  // for subject name
  subject_22: any= {};
 commen_Subject_Name :any= {};
  questions :any=[];  
  new_questions : any = [];
  questions_22 : any=[];

  question_One : any = {} ;
  questions_array  :any[] | any = {} ;  // for Section : A 
  questions_array_B  :any[] | any = {} ;
  questions_array_C  :any[] | any = {} ;

  id: number = 0;   // for Next and Previous Button

  que_id: number = 1
  quiz_Form: FormControl<any> | any;
  is_Show_Quiz: boolean = false ;
  is_hide_start_Quiz_btn : boolean = true ;
  times: any;

  count_down_time_min : number = 19; 
  count_down_time_sec :number = 60;
  time_Over_Message : string |any;
  is_Time_Over : boolean = false;
  options_as_Key: any[] = [];

  answers_By_User : any = [] ; 
  selected_option_by_user : any ;
  is_Time_Over_Message : boolean = false ;
  is_Hide_Quiz_On_Time_Out : boolean= false ;
  is_Show_Finish_Btn : boolean = false ;

  is_Quiz_Finish_By_User : boolean = false ;

  is_hide_section_21_F : boolean = false // for show of section 
  is_hide_section_22_F: boolean = false // for show of section

  right_Ans : any = [] ;
  num_Correct_ans :any = 0 ;

   is_Hide_Previous_Btn : boolean = true ;
   is_Hide_Next_Btn : boolean = true ;

   section_Name : string = "" ;

  constructor ( private http : HttpClient  ,
                private quiz_Service : QuizService   ){};
  
  public  ngOnInit(): void {
      
    this.quiz_Form = new FormGroup({
    options : new FormControl('',[Validators.required]),
   
    });

 
   console.log("this.selected_option_by_user = ",this.selected_option_by_user)

    this.http.get<any>('assets/db-Quiz-Data1.json').subscribe((res:any) => {
         console.log("res =",res)
         console.log("res.result =",res.result);
         console.log("res.result.result =",res.result.result);
         console.log("res.result.result.total_time =",res.result.result.total_time);
         console.log("res.result.result.list =",res.result.result.list);
         console.log("res.result.result.list['21'] =",res.result.result.list['21'] );
         console.log("res.result.result.list['22'] =",res.result.result.list['22'] );  // 22 

         console.log("res.result.result.list['21'].subject_name =",res.result.result.list['21'].subject_name );
         console.log("res.result.result.list['21'].sections =",res.result.result.list['21'].sections );
         console.log("res.result.result.list['21'].sections.A =",res.result.result.list['21'].sections.A );
         console.log("res.result.result.list['21'].sections.B =",res.result.result.list['21'].sections.B );
         console.log("res.result.result.list['21'].sections.C =",res.result.result.list['21'].sections.C );


         console.log("res.result.result.list['21'].sections.A =",res.result.result.list['22'].sections.A );
         console.log("res.result.result.list['21'].sections.B =",res.result.result.list['22'].sections.B );
         console.log("res.result.result.list['21'].sections.C =",res.result.result.list['22'].sections.C );

         console.log("res.result.result.list['21'].sections.A.questions=",res.result.result.list['21'].sections.A.questions );
         console.log("res.result.result.list['22'].sections.A.questions=",res.result.result.list['22'].sections.A.questions );

         console.log("res.result.result.list['21'].sections.A.questions[0]=",res.result.result.list['21'].sections.A.questions[0] );
         console.log("res.result.result.list['21'].sections.A.questions.question=",res.result.result.list['21'].sections.A.questions.question );


         this.quiz_Data = res.result.result.list ;
         this.quiz_Data = Object.keys(this.quiz_Data);

         console.log("this.quiz_Data =",this.quiz_Data)
         console.log("this.quiz_Data =",this.quiz_Data[0])

         this.subject_21 = res.result.result.list['21'].subject_name ;
         this.subject_22  = res.result.result.list['22'].subject_name;
         this.commen_Subject_Name = res.result.result.list['21'].subject_name ;
         this.section_Name = "Section A";
         console.log(this.subject_21)

         this.questions_array = res.result.result.list['21'].sections.A.questions ;
           
         console.log( this.new_questions.length)

          console.log("this.questions_array =",this.questions_array)

           
            this.questions_array.map((res:any) => {
                console.log(res);
                console.log(res.correct_options)

                 this.right_Ans.push(res.correct_options)
            })
          
            console.log("this.right_Ans",this.right_Ans)
            this.questions = this.questions_array[this.id];
            
          console.log("this.questions_array =",this.questions_array.option1)
        
          console.log("this.questions_array.index =",this.questions);
          console.log("this.questions_array.index =",this.questions_22)

     })

  };

    subject_21_F(){
      this.quiz_Service.quiz_Data().subscribe((res:any) => {
        console.log(res)
        this.commen_Subject_Name = res.result.result.list['21'].subject_name 

      })
      this.commen_Subject_Name 
      this.is_hide_section_21_F = true ;
      this.is_hide_section_22_F = false ;
    };

    subject_22_F() {
      this.quiz_Service.quiz_Data().subscribe((res:any) => {
        console.log(res)
        this.commen_Subject_Name = res.result.result.list['22'].subject_name 

      })
      this.is_hide_section_21_F = false ;
      this.is_hide_section_22_F = true ;
    };

    subject_21_section_A(){
          this.quiz_Service.quiz_Data().subscribe((res:any) =>{
            this.questions = res.result.result.list['21'].sections.A.questions ;
            this.questions = this.questions_array[this.id];
           console.log( this.questions)
            this.section_Name = "Section A";
            this.commen_Subject_Name = res.result.result.list['21'].subject_name ;
            console.log(this.subject_21 )
            console.log(res.result.result.list['21'].sections.A.questions)
          })
    };

    subject_21_section_B(){
        this.quiz_Service.quiz_Data().subscribe((res:any) => {
          this.questions = res.result.result.list['21'].sections.B.questions ;
          this.questions = this.questions_array[this.id];
          this.section_Name = "Section B";
          this.commen_Subject_Name = res.result.result.list['21'].subject_name ;


        })
    };

    subject_21_section_C(){
      this.quiz_Service.quiz_Data().subscribe((res:any) => {
        console.log(res.result.result.list['21'].sections.C.questions)
        this.questions = res.result.result.list['21'].sections.C.questions ;
        this.questions = this.questions_array[this.id];
        this.section_Name = "Section C"
        this.commen_Subject_Name = res.result.result.list['21'].subject_name ;

      })
    };
// for mathes
    subject_22_section_A(){
      this.quiz_Service.quiz_Data().subscribe((res:any) => {
        console.log(res.result.result.list['22'].sections.A.questions);
        this.questions = res.result.result.list['22'].sections.A.questions ;
        this.questions = this.questions_array[this.id];
        this.section_Name = "Section A"
        this.commen_Subject_Name = res.result.result.list['22'].subject_name ;
        console.log( this.commen_Subject_Name )
      })
    };
    subject_22_section_B(){
      this.quiz_Service.quiz_Data().subscribe((res:any) => {
        console.log(res.result.result.list['22'].sections.B.questions)
        this.questions = res.result.result.list['22'].sections.B.questions ;
        this.questions = this.questions_array[this.id];
        this.section_Name = "Section B";
        this.commen_Subject_Name = res.result.result.list['22'].subject_name ;
      })
    };
    subject_22_section_C(){
      this.quiz_Service.quiz_Data().subscribe((res:any) => {
        console.log(res.result.result.list['22'].sections.C.questions)
        this.questions = res.result.result.list['22'].sections.B.questions ;
        this.questions = this.questions_array[this.id];
        this.section_Name = "Section C"
        this.commen_Subject_Name = res.result.result.list['22'].subject_name ;

      })
    }
  // Previous Button
  previous(id: number) {
   
    if (this.id > 0) {
      this.que_id--;
      this.id--;
      this.questions = this.questions_array[this.id];
      this.is_Show_Finish_Btn = false;
    }
 
    this.quiz_Form.get('options').reset();
    this.updateButtonVisibility()
  }
  // Next Button
  next( id:number) {
    this.quiz_Form.get('options').reset();
    
    if (this.id < this.questions_array.length - 1) {
      this.que_id++;

      this.id++;
      console.log("this.id = ",this.id)
      this.questions = this.questions_array[this.id];
    };

    if(this.id === this.questions_array.length) {
        this.subject_21_section_B()
    }
        this.updateButtonVisibility()
        this.quiz_Form.get('options').reset();
  };

  private updateButtonVisibility() {
    
    if (this.id === 0) {
      this.is_Hide_Previous_Btn = false;
      this.is_Hide_Next_Btn = true;

    } else if (this.id === this.questions_array.length - 1) {
      this.is_Hide_Previous_Btn = true;
      this.is_Hide_Next_Btn = false;
    } else {
      this.is_Hide_Previous_Btn = true;
      this.is_Hide_Next_Btn = true;
    }
}

  startTimer(){

    this.is_Show_Quiz = true ;

    this.is_hide_start_Quiz_btn = false;

    this.is_Time_Over = true;

    this.is_Hide_Quiz_On_Time_Out = true

    this.is_Show_Finish_Btn = true
    // here we store the options as key 
    this.options_as_Key  =  Object.keys(this.questions);
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
    },1000);

    if(this.count_down_time_min === 0 &&  this.count_down_time_sec === 0) {
      this.is_Show_Quiz = false ;
    };
    if(this.count_down_time_min === -1) {
      this.is_Quiz_Finish_By_User = true ;
    }
    this.calculate_Marks(this.right_Ans , this.answers_By_User);
  }

  ans_by_user(e:any,ans:any,id:any){
    console.log("e.target.value",e.target.value)
    console.log("ans",ans)
    this.selected_option_by_user = ans.slice(6,7)
    console.log("id",id)

    this.answers_By_User.push(this.selected_option_by_user); // here i removed " id "  
    console.log(this.answers_By_User)   // here is the array of anwers  by user
    this.answers_By_User.map((res:any) => {
       
    })
   };

   finish_Quiz() {
    this.is_Hide_Quiz_On_Time_Out = false ;

    this.is_Quiz_Finish_By_User = true ;

    this.answers_By_User
    console.log(this.answers_By_User);

    this.calculate_Marks(this.right_Ans , this.answers_By_User);
   };

   private calculate_Marks(right_Ans : any , answers_By_User:any){
        console.log("object")
    const right_Anwser = right_Ans.length ;
    const ans_By_User = answers_By_User.length
      console.log("right_Anwser",right_Ans)
      console.log("right_Anwser",answers_By_User)


    for (let i = 0 ; i < right_Anwser ; i++ )  {
         console.log(right_Anwser)
    
     if( right_Ans[i] === answers_By_User[i]){
          console.log(right_Ans)
          console.log(answers_By_User)

          this.num_Correct_ans++;
          console.log("this.num_Correct_ams",this.num_Correct_ans)
     }
    }
   }
}
