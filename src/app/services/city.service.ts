import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppCity } from '../model/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  public apiUrl = 'https://www.odwb.be/api/explore/v2.1/catalog/datasets/communes_s3/records' 

  constructor(public http: HttpClient) { }

  getNomCourtsCommunes(): Observable<string[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<any>(url).pipe(
      map(response => {
        return response.records.map((record: AppCity) => record.nom);
      })
    );
  }
}
