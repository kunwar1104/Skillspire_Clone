import { Component, TemplateRef } from '@angular/core';
import { TrainersService } from '../services/trainers.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import { concat } from 'rxjs';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent {
  
    modalRef?: BsModalRef;  
    button_hide : boolean = false;
    page : number = 1 ;
    limit : number = 6; 
    // isButtonShow : boolean = true;

    public trainers_Data_1 : any[] = []
    // public trainers_Data_2 : any = {}  


    constructor( public t_service: TrainersService,
                 private modalService: BsModalService
      ) {}

  ngOnInit(): void {
      this.trainers_Data()
   
  } 
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);

  }

  trainers_Data(){
    this.t_service.allTrainers_Page1(this.limit,this.page).subscribe((res:any) => {
      console.log(res)
      console.log(res.DATA.trainers)
      // this.trainers_Data_1 = res.DATA.trainers
      this.trainers_Data_1 = this.trainers_Data_1.concat(res.DATA.trainers)
      // console.log(this.trainers_Data())
     

    })
  }

  trainers_More_Data(){
    this.page++;
    this.trainers_Data()
  }



}
