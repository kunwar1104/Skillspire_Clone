import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {
        
      blog_Details : any      

      constructor( public  active_Route : ActivatedRoute,
                  public blog_service : BlogService     ) {}

      ngOnInit(): void {
        this.active_Route.paramMap.subscribe((params:any)=> {
          console.log(params)
         let urlQuery  = params.get('id')

          this.blog_service.blog_Details(urlQuery).subscribe((res:any)=> {
            console.log(res)
            console.log(res.DATA.blog)
            this.blog_Details = res.DATA.blog

          })
        })
        
      }
}
