import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DsashboardService {
  private url = 'http://localhost:8000';

  constructor( public http : HttpClient) { }

  programsCategory(){
    const headers = new HttpHeaders({
      'accept':'application/json'
    });
    return this.http.get(`${this.url}/programs`,{headers})
  }
   
  allTrainers(){
    const headers = new HttpHeaders({
      'accept':'application/json'
    })
    return this.http.get(`${this.url}/trainers`, {headers})
  }
  
  
  allSuccessStories(){
    const headers = new HttpHeaders({
      'accept': 'application/json'
    })
    return this.http.get(`${this.url}/testinomials`, {headers})
  }

  // http://localhost:8000/blogs
   allBlogs() {
    const headers = new HttpHeaders({
      'accept': 'application/json'
    })
    return this.http.get(`${this.url}/blogs`, {headers})
   }
}
