import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  
   private a : any;
   private b : any;
   public url = 'https://api.skillspire.in/api/program/filter-sorting-config';
   public programs = 'https://api.skillspire.in/api/program'; 
  
   constructor( public http : HttpClient ) { }
  
   ngOnInit(): void {
    this.getProgramsPage(this.a , this.b )
    console.log(this.a , this.b)
    // console.log(this.getProgramsPage)
   }

   getProgramsPage( ParametersValue:any[],sortBy:string ) {

     let paramsQuery = new HttpParams();

      paramsQuery = paramsQuery.append('sortBy',sortBy);
      paramsQuery = paramsQuery.append('limit',6)
      paramsQuery = paramsQuery.append('page',1)

    //  console.log("paramsQuery =",paramsQuery)
     Object.keys(ParametersValue).forEach((key:any) => {
      paramsQuery = paramsQuery.append(key, ParametersValue[key])
         console.log(paramsQuery)
     })
       return this.http.get(`${this.programs}`, {params: paramsQuery})

   }

   scrollApi(){
    return this.http.get(`${this.programs}`, {params: {'sortBy':'start_date','limit':6,"page":2}})
   }
   scrollApi_2(){
    return this.http.get(`${this.programs}`, {params: {'sortBy':'start_date','limit':6,"page":3}}
    
    )
   }



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

  programsData(params_Data: any){
    return this.http.get(`${this.programs}/${params_Data}`)
  }
}
