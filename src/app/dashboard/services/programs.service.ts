import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

   private url = 'https://api.skillspire.in/api/program/filter-sorting-config';
   public programs = 'https://api.skillspire.in/api/program'; 
  
   constructor( public http : HttpClient) { }

  programsFillters(){
    const headers = new HttpHeaders({
      'accept':'application/json'
    })
  return this.http.get(`${this.url}`, {headers})
  }

  allPrograms(){
    const headers = new HttpHeaders({
      'accept':'application/json'
    });
    
    return this.http.get(`${this.programs}`,{headers})
    
  }
}
