import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppCity } from '../model/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  public apiUrl = 'https://www.odwb.be/api/explore/v2.1/catalog/datasets/communes_s3/records?select=nom&limit=100' 
  public CityList:string[] = [];
  

  constructor(public http: HttpClient) {
   }

  getNomCourtsCommunes(): Observable<string[]> {
    const url = `${this.apiUrl}`;
    return forkJoin([
      this.http.get<any>(url),
      this.http.get<any>(url + '&offset=100'),
      this.http.get<any>(url + '&offset=200'),
    ]).pipe(
      map(([r1, r2, r3]) => {
        return [...r1.results, ...r2.results, ...r3.results].map((results: AppCity) => {
          return results.nom;
        }).sort();
      })
      
    );
  }
  
}
