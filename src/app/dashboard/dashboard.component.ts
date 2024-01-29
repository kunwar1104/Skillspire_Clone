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
  trainersCarousel: any = null;
  newData: any = {};
  newData1: any = {};
  myitem: any = [];
  itemsPerSlide: any;
  // singleSlideOffset = true;
  showIndicator = false
  // slidesChangeMessage = 'Hello';
  slides: any
  ProgramsListid: any;
  // hoverEffact!: "'active'";
  ifNoData: boolean = false;
  index: number = 0;
  CardDetails: any;
  isAnimated: any;
  newCardDetails: any;
  successStory: any;
  blogsDetails: any
  // activeSlideIndex: number = -1;
  isActive: boolean = false;
  activeSlideIndex : number | any = 0; 
  activeSubCategory :  number | any = 0;
  // activeSlideIndex: number = -1;
  public carouselItem: CAROUSEL[] = carousel;

  constructor(private dashboardServices: DsashboardService) { }


  ngOnInit(): void {
    console.log(this.carouselItem)
    console.log()
    // Programs main Api 
    this.dashboardServices.programsCategory().subscribe((res: any) => {
      this.ProgramsCategory = res
      console.log(res)
      console.log(res[2])  // for defaul data

      if (res == null) {
        this.ifNoData = false
      }
      if (res) {
        this.ProgramsListDefault = res[0].programs
        console.log(this.ProgramsListDefault)
        // console.log(this.ProgramsListDefault[2])
      }
    })
    // For SubCategory  
    this.dashboardServices.programsCategory().subscribe((res: any) => {
      this.newCardDetails = res[0].programs
      this.CardDetails = this.newCardDetails[2]
    })

    // Trainers Api

    this.dashboardServices.allTrainers().subscribe((res: any) => {
      this.trainersCarousel = res.DATA.trainers
      //  console.log(this.trainersCarousel)
    })

    // Success Stories Api

    this.dashboardServices.allSuccessStories().subscribe((res: any) => {
      console.log(res)
      console.log(res.DATA.testinomials)
      this.successStory = res.DATA.testinomials;
      this.successStory.map((data: any) => {
        console.log(data.user_name)
      })
    })

    // Blogs

    this.dashboardServices.allBlogs().subscribe((res: any) => {
      console.log(res)
      console.log(res.DATA.blogs)
      this.blogsDetails = res.DATA.blogs
      console.log(this.blogsDetails)
      this.blogsDetails.map((data: any) => {
        console.log(data.header)
      })

    })

  }

  particularProgramCategory(data: any, index: any , id :any) {
    // console.log(id)
    console.log(data)
    console.log(index)
    console.log(id)

  this.activeSlideIndex = index;
  console.log(this.activeSlideIndex)
    // this.isActive = data;
    if (data === null) {
      this.ifNoData = true;
      // this.isActive = true
      console.log("null")
    }
    else if (data == 'Accounting') {
      console.log('Accounting')
      this.ifNoData = false

      this.dashboardServices.programsCategory().subscribe((res: any) => {
        console.log(res,)

        res.map((myitem: any) => {
          console.log(myitem)
          if (myitem.name == "Accounting") {
            this.isActive = true

            console.log(myitem.programs)
            this.activeSlideIndex = this.ProgramsListDefault.indexOf(myitem.programs)
            this.ProgramsListDefault = myitem.programs

          }
        })
      })
    }
    
    else if (data == 'Personal Development') {
      console.log('Personal Development')

      this.ifNoData = false

      this.dashboardServices.programsCategory().subscribe((res: any) => {
        console.log(res,)

        res.map((myitem: any) => {

          if (myitem.name == "Personal Development") {
            console.log(myitem.programs)
            this.isActive = true

            this.ProgramsListDefault = myitem.programs
            console.log(this.ProgramsListDefault)
          }
        })
      })
    }
    else if (data == 'GST') {
      console.log('GST')
      
      this.ifNoData = false

      this.dashboardServices.programsCategory().subscribe((res: any) => {
        console.log(res,)

        res.map((myitem: any) => {

          if (myitem.name == "GST") {
            console.log(myitem.programs)
            this.isActive = true

            this.ProgramsListDefault = myitem.programs
            console.log(this.ProgramsListDefault)
          }

        })
      })
    }
    else if (data == 'Coding') {
      this.ifNoData = true
      console.log('Coding')

      this.dashboardServices.programsCategory().subscribe((res: any) => {
        console.log(res,)

        res.map((myitem: any) => {
          if (myitem.name == "Coding") {
            this.isActive = true

            console.log(myitem.programs)
            this.ProgramsListDefault = myitem.programs
          }
        })
      })
    }
    else {
      this.isActive = false
    }
  }

  particularProgramSubCategory(id: any , sub_Category_Id :any) {
    this.index = id
    console.log(sub_Category_Id )
    console.log(this.index)
    this.activeSubCategory = sub_Category_Id
    this.ProgramsListDefault.map((data: any,) => {
      console.log(data)

      if (data.id == this.index) {

        this.CardDetails = data
        console.log(this.CardDetails)
      }
    })
  }

  allTarinersCarousel() {
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


