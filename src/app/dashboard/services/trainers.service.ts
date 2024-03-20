import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainersService {
  page!: number
  private tarinersUrl : string = 'https://api.skillspire.in/api/trainer' ;

  constructor ( public http : HttpClient) { }

  allTrainers_Page1(limit: number , page:any ){
    return this.http.get(`${this.tarinersUrl}`,{params:{'sortBy':'reverse:created_at',"limit":limit,"page":page}})
  }
  
  
}
