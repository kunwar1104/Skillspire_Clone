import { Component } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-prof-detail',
  templateUrl: './prof-detail.component.html',
  styleUrls: ['./prof-detail.component.scss']
})
export class ProfDetailComponent {
  

   constructor( public authService:AuthService) {

   }

  ngOnInit(): void {
    // this.authService.update_User_Education().subscribe
    
  }
}
