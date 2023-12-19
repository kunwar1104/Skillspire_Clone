import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPortalRoutingModule } from './my-portal-routing.module';
import { MyPortalComponent } from './my-portal.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserEducComponent } from './user-educ/user-educ.component';
import { ProfDetailComponent } from './prof-detail/prof-detail.component';
import { DashbordLayoutComponent } from 'src/app/layout/dashbord-layout/dashbord-layout.component';


@NgModule({
  declarations: [
    // DashbordLayoutComponent,
    MyPortalComponent,
    UserInfoComponent,
    UserEducComponent,
    ProfDetailComponent,
    
    
  ],
  imports: [
    CommonModule,
    MyPortalRoutingModule
  ]
})
export class MyPortalModule { }
