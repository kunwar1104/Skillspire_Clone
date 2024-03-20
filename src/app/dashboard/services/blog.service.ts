import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
     
  private  blogs_Url : string = "https://api.skillspire.in/api/blog"
   
  constructor( public http: HttpClient) { }

  all_Blogs_Data(limit: number ,page:number ){
    return this.http.get(`${this.blogs_Url}` ,{params :{'sortBy':'reverse:date','limit':limit, 'page':page,}},);
  } 

  blog_Details(id:any) {
    return this.http.get(`https://api.skillspire.in/api/blog/${id}`) 
  }
}
