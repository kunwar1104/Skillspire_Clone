import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';

@NgModule({
  declarations: [
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "programs/:id",
        component: CourseDetailsComponent 
      }
    ])
  ]
})
export class ProgramsModule { }
