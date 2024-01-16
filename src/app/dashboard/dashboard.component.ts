import { Component } from '@angular/core';
import { carousel } from './../data/home- carousel-data';
import { CAROUSEL } from '../Models/home-carousel-model';
import { DsashboardService } from './services/dsashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent {

  ProgramsCategory: any;
  ProgramsCategoryList!: any;
  ProgramsList: any = null;
  ProgramsListDefault: any = null;
  trainersCarousel :  any = null ;
  newData: any = {};
  newData1: any = {};
  myitem: any = [];
  itemsPerSlide : any;
  // singleSlideOffset = true;
  showIndicator = false
  // slidesChangeMessage = 'Hello';
  slides: any
  ProgramsListid: any;
  // hoverEffact!: "'active'";
  ifNoData: boolean = false; 
  index : number = 0;
  CardDetails : any ;
  isAnimated : any;
  newCardDetails: any;
  successStory : any ;
  blogsDetails : any

  public carouselItem: CAROUSEL[] = carousel;

  constructor(private dashboardServices: DsashboardService) { }

  
  ngOnInit(): void {
    console.log(this.carouselItem)
    console.log()
  // Programs main Api 
    this.dashboardServices.programsCategory().subscribe((res: any) => {
        this.ProgramsCategory = res
        console.log(res)
        console.log(res[2])

        if (res == null) {
          this.ifNoData = false
        }
        if(res){
          this.ProgramsListDefault = res[2].programs
          console.log(this.ProgramsListDefault)
          // console.log(this.ProgramsListDefault[2])
        }
      })
// For SubCategory  
      this.dashboardServices.programsCategory().subscribe((res:any) => {
        this.newCardDetails =res[2].programs
         this.CardDetails= this.newCardDetails[2]
      })

// Trainers Api

    this.dashboardServices.allTrainers().subscribe((res: any) => {
       this.trainersCarousel = res.DATA.trainers
      //  console.log(this.trainersCarousel)
    })

// Success Stories Api
   
    this.dashboardServices.allSuccessStories().subscribe((res:any) => {
    console.log(res)
    console.log(res.DATA.testinomials)
    this.successStory = res.DATA.testinomials;
      this.successStory.map((data: any)=> {
         console.log(data.user_name)
      })
    })

// Blogs

  this.dashboardServices.allBlogs().subscribe((res:any) => {
     console.log(res)
     console.log(res.DATA.blogs)
     this.blogsDetails = res.DATA.blogs
     console.log(this.blogsDetails)
     this.blogsDetails.map((data: any)=> {
      console.log(data.header)
     })

  })

  }

  particularProgramCategory(data: any) {
    // console.log(id)
    console.log(data)
    if (data === null) {
      this.ifNoData = true
    }
    if (data == 'Accounting') {
      this.ifNoData = false

      this.dashboardServices.programsCategory().subscribe((res: any) => {
        console.log(res,)

        res.map((myitem: any) => {
           console.log(myitem)
          if (myitem.name == "Accounting") {
            console.log(myitem.programs)

            this.ProgramsListDefault = myitem.programs
           
          }
        })
      })
    }

    if (data == 'Personal Development') {
      this.ifNoData = false

      this.dashboardServices.programsCategory().subscribe((res: any) => {
        console.log(res,)

        res.map((myitem: any) => {

          if (myitem.name == "Personal Development") {
            console.log(myitem.programs)

            this.ProgramsListDefault = myitem.programs
            console.log(this.ProgramsListDefault)
          }
          
        })
      })
    }

    if (data == 'GST') {
      this.ifNoData = false

      this.dashboardServices.programsCategory().subscribe((res: any) => {
        console.log(res,)

        res.map((myitem: any) => {

          if (myitem.name == "GST") {
            console.log(myitem.programs)

            this.ProgramsListDefault = myitem.programs
            console.log(this.ProgramsListDefault)
          }
        })
      })
    }

    if (data == 'Coding') {
      this.ifNoData = true

      this.dashboardServices.programsCategory().subscribe((res: any) => {
        console.log(res,)

        res.map((myitem: any) => {
          if (myitem.name == "Coding") {

            console.log(myitem.programs)
            this.ProgramsListDefault = myitem.programs
          }
        })
      })
    }
  }

  particularProgramSubCategory(id: any) {
    this.index = id
    console.log(this.index)
    this.ProgramsListDefault.map((data: any,)=>{
      console.log(data)

      if( data.id == this.index ) {

          this.CardDetails = data
          console.log(this.CardDetails) 
      } 
    })
  }

  allTarinersCarousel(){
    this.dashboardServices.allTrainers().subscribe((res: any) => {
       console.log(res)
       console.log(res.DATA)
       console.log(res.DATA.trainers)
       console.log(res.DATA.trainers.name)

       this.trainersCarousel = res.DATA.trainers
       console.log(this.trainersCarousel)
    })
  }

}


