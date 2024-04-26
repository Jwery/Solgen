import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private apiUrl = 'https://www.odwb.be/api/explore/v2.1/catalog/datasets/communes_s3/records?limit=20';

  constructor(private http: HttpClient) { }

  getCities(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
