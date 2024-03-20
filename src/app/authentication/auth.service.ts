import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http"
import { Login, Signup, UpdateUserProfile } from './auth-interface';
import { Observable, ObservableInput, catchError, map, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private url = "http://localhost:8000";
  token: any;
  headers : any

  // private error!: HttpErrorResponse;

  constructor( private http: HttpClient,
               private cookieService: CookieService
    ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("accessToken")
    console.log(this.token);

    this.setTokenAsCookie()
    console.log("Auth Test ")
  }

  setTokenAsCookie(){

    const token = localStorage.getItem('accessToken');

    if( token !== null &&  token  !== undefined ){

       this.cookieService.set('accessToken', token, { expires:7})

    }
    else {
      console.error('Access token is null or undefined');
      // Handle the case where the token is null or undefined
    }
    const token_Data = this.cookieService.get('accessToken') ;
    console.log("token data from cookie : ", token_Data);

    
  }

// ****************************************************************************************
//                                  Signup
// ****************************************************************************************

  signUp(data: Signup): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json',
    });
    return this.http.post<Signup>(`${this.url}/register`, data, { headers })
  }

  public handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred client-side or network error occurred maybe:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
// ****************************************************************************************
//                                      Login
// ****************************************************************************************

  login(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
    });
    console.log(data)
    return this.http.post(`${this.url}/login`, data, {headers })
    .pipe(map ((res :any) => {
         console.log(res)
         console.log(res.accessToken)
         localStorage.setItem("accessToken",res.accessToken)
    })) 
  }

// ****************************************************************************************
//                                      LogOut
// ****************************************************************************************

  logOut(data: any) {
    return this.http.post(`${this.url}/logout`, data)
  }

// ****************************************************************************************
//                                    Get_User_Profile
// **************************************************************************************** 

  userProfile() {
   
   const token_Data = this.cookieService.get('accessToken') ;
   console.log(token_Data)

     const  headers = new HttpHeaders({
      'accept': '*/*',
    });
    console.log("headers =",headers)

    console.log('sdsdssdsdsds')
    return this.http.get(`${this.url}/user_profile`, {
      withCredentials:true,  
  }
    
    )
  }

  // ****************************************************************************************
  //                                  Update_User_Profile
  // **************************************************************************************** 
  updateUserProfile(data: UpdateUserProfile) {

    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type': 'application/json'

    })
    return this.http.put<UpdateUserProfile>(`${this.url}/user_profile`, data, { headers,withCredentials:true })
  }

  // ****************************************************************************************
  //                                  Update_User_Education
  // **************************************************************************************** 
  update_User_Education(data: any) {
    return this.http.post(`${this.url}/user_professional`, data)
  }
}
