import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { NotificationComponent } from './notification/notification.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashbordLayoutComponent } from '../layout/dashbord-layout/dashbord-layout.component';


@NgModule({
  declarations: [
    LoaderComponent,
    NotificationComponent,
    DashbordLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  // here we export some component for root file & and for other module
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    NotificationComponent,
    
  ]
})
export class SharedModule { }
