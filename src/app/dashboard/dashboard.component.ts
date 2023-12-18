import { Component } from '@angular/core';
import { carousel } from './../data/home- carousel-data';
import { CAROUSEL } from '../Models/home-carousel-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public  carouselItem : CAROUSEL[] = carousel; 

  // public carousel 

  ngOnInit(): void {
    console.log(this.carouselItem)
    
  }
}
