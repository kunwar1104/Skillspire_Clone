import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPortalRoutingModule } from './my-portal-routing.module';
import { MyPortalComponent } from './my-portal.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { UserEducComponent } from './user-educ/user-educ.component';
import { ProfDetailComponent } from './prof-detail/prof-detail.component';


@NgModule({
  declarations: [
    // DashbordLayoutComponent,
    MyPortalComponent,
    PersonalInfoComponent,
    UserEducComponent,
    ProfDetailComponent,
    
    
  ],
  imports: [
    CommonModule,
    MyPortalRoutingModule
  ]
})
export class MyPortalModule { }
