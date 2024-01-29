import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { map, concat } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  
    blogs_Card : any[] = [] ;
    page : number = 1 ;
    limit : number = 6;
    blog_slug: string | any ;
    hide_Btn: boolean = true ;

   constructor ( private blog_Ser : BlogService,
                 private active_route: ActivatedRoute ) {
   }

  ngOnInit(): void {
    this.all_Blogs_Cards()
  }

  all_Blogs_Cards(){
    this.blog_Ser.all_Blogs_Data(this.limit ,this.page  ).subscribe((res:any) => {
      console.log(res)
      console.log(res.DATA.blogs)
      
      // this.blogs_Card = res.DATA.blogs
      this.blogs_Card = this.blogs_Card.concat(res.DATA.blogs)
      // res.DATA.blogs.map((data: any)=> {
       
      // })
      if(this.page == 3){
        this.hide_Btn = false ;
      }
    

    })
  }
  
  more_BLog_Data(  ){
    this.page++;
    // this.limit++;
    this.all_Blogs_Cards();
      
  }

  blog_details(data:any){
    console.log(data)
    this.all_Blogs_Cards()
  }
}
