import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http"
import { Login, Signup, UpdateUserProfile } from './auth-interface';
import { Observable, ObservableInput, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private url = "http://localhost:8000";

  constructor( private http: HttpClient ) { }
// ****************************************************************************************
//                                  Signup
// ****************************************************************************************
  signUp( data : Signup ): Observable <any> {
      const headers = new HttpHeaders({
        'Content-Type':'application/json',
        'accept':'application/json'
    });
      console.log(data)
      return this.http.post<Signup>(`${this.url}/register`,data, {headers} )
  }
// ****************************************************************************************
//                                      Login
// ****************************************************************************************
  login (data : Login  ){ 
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'accept':'application/json'
    });
    console.log(data)
    return this.http.post<Login>(`${this.url}/login`,data, {headers})
  }

// ****************************************************************************************
//                                      LogOut
// ****************************************************************************************
  logOut(data : any) {
    return this.http.post(`${this.url}/logout`,data)
  }

// ****************************************************************************************
//                                    Get_User_Profile
// **************************************************************************************** 
  userProfile() {
    return this.http.get(`${this.url}/user_profile` )
  }

// ****************************************************************************************
//                                  Update_User_Profile
// **************************************************************************************** 
updateUserProfile(data: UpdateUserProfile) {

  const headers = new HttpHeaders ({
      'Content-Type':'application/json',
      'accept':'application/json'
  })
   return this.http.put<UpdateUserProfile>(`${this.url}/user_profile`,data, {headers} )
}

// ****************************************************************************************
//                                  Update_User_Education
// **************************************************************************************** 
update_User_Education( data :any  ) {
  return this.http.post(`${this.url}/user_professional`, data)
}


}


