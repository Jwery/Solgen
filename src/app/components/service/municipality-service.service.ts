import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {

  constructor(public http: HttpClient) { }

  getMunicipalities(): Observable<Municipality[]> {
    return this.http.get<Municipality[]>(`https://www.odwb.be/api/explore/v2.1/catalog/datasets/communes_s3/records?limit=20`);
  }
  
}