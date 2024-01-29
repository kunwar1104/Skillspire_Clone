import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashbordLayoutComponent } from '../layout/dashbord-layout/dashbord-layout.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { MyPortalModule } from './my-portal/my-portal.module';
import { ProgramsComponent } from './programs/programs.component';
import { JobsComponent } from './jobs/jobs.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgramsModule } from './programs/programs.module';
import { TrainersComponent } from './trainers/trainers.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BlogsModule } from './blogs/blogs.module';

@NgModule({
  declarations: [
    DashbordLayoutComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ProgramsComponent,
    JobsComponent,
    BlogsComponent,
    TrainersComponent
   
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MyPortalModule,
    ProgramsModule,
    BlogsModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    DashboardComponent,
    DashbordLayoutComponent
  ]
})
export class DashboardModule { }
