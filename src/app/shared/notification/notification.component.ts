import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertComponent } from 'ngx-bootstrap/alert';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  message : string | undefined;
  type : string | undefined;

  constructor (bsModalref: BsModalRef) {}
   
  ngOnInit(): void {

        
  }
}
