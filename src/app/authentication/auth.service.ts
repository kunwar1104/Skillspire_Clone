import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http"
import { Login, Signup } from './auth-interface';
import { Observable, ObservableInput, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signupUrl = 'http://localhost:8000/register';
  private loginUrl = 'http://localhost:8000/login';

  constructor( private http: HttpClient ) { }

  signUp( data : Signup ): Observable <any> {

      const headers = new HttpHeaders({
        'Content-Type':'application/json',
        'accept':'application/json'
    });
    
    console.log(data)
    return this.http.post<Signup>(this.signupUrl,data, {headers} )
    
  }

  login (data : Login  ){ 
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'accept':'application/json'
    });
    console.log(data)
    return this.http.post<Login>(this.loginUrl,data, {headers})
  }
  

  public  handleError(error: HttpErrorResponse) {
     if (error.error instanceof ErrorEvent ){
         alert("Somting is wrong")
         console.error('An error occurred :',error.error.message )
     } 
     else{
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`
          );
     }
     return throwError('Something bad happened; please try again later.');
  }

}


