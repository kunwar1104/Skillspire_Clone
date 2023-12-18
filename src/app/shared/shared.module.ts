import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { NotificationComponent } from './notification/notification.component';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    LoaderComponent,
    NotificationComponent,
    // DashbordLayoutComponent,
    // HeaderComponent,
// /    FooterComponent
  ],
  imports: [
    CommonModule,
    AlertModule.forRoot()
  ],
  // here we export some component for root file & and for other module
  exports: [
    // HeaderComponent,
    // FooterComponent,
    LoaderComponent,
    NotificationComponent,
    
  ]
})
export class SharedModule { }
