import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NotificationComponent } from './notification.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  private notificationSubject = new BehaviorSubject<string>('');
  notification$ = this.notificationSubject.asObservable();

  constructor(private modalService: BsModalService,
              private bsModalRef: BsModalRef ) 
  {  }

   showNotification (message : string, type: string , autoClose = true , timeout = 1000 ): void {
         this.bsModalRef = this.modalService.show(NotificationComponent, {
          initialState: {
            message,
            type,
          },
        });
            if (autoClose) {
              setTimeout(() => {
                this.bsModalRef.hide();
              },timeout )
            }
   }

   updateNotification(message: string): void {
    this.notificationSubject.next(message);
  }
}
