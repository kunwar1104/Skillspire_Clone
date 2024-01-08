import { Component, TrackByFunction } from '@angular/core';
import { carousel } from './../data/home- carousel-data';
import { CAROUSEL } from '../Models/home-carousel-model';
import { DsashboardService } from './services/dsashboard.service';
import { NgModel } from '@angular/forms';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  slidesChangeMessage: string | undefined;

showCategorywiseSkill(arg0: any) {
throw new Error('Method not implemented.');
}
// slides: any;
  public  carouselItem : CAROUSEL[] = carousel; 
  // slide: any;
  ProgramsCategory: any;
// programs Carasoule
  
   constructor (private dashboardServices: DsashboardService) {

   }    
   itemsPerSlide = 5;
   singleSlideOffset = true;
   noWrap = true;
  
   

  ngOnInit(): void {
    console.log(this.carouselItem)
      this.dashboardServices.programsCategory().subscribe((res)=> {
        console.log(res)
        this.ProgramsCategory = res
    })
   
   
  }

 

    


 
}
