import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { NotificationComponent } from './notification/notification.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    LoaderComponent,
    NotificationComponent,
    // HeaderComponent,
    // FooterComponent
  ],
  imports: [
    CommonModule,
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
