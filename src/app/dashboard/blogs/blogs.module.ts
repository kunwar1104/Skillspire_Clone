import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';



@NgModule({
  declarations: [
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'blog/:id', 
        component: BlogDetailComponent
      }
    ])
  ]
})
export class BlogsModule { }
