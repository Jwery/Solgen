import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VillesService {

  url: string = "https://www.odwb.be/api/explore/v2.1/catalog/datasets/communesgemeente-belgium/records?limit=20"
  APIUrl: string | undefined;
  constructor(private http:HttpClient) {}
   
  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/communes')
  }
}
