import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {

  constructor(private http: HttpClient) { }

  getMunicipalities() {
    return this.http.get<any>(`https://www.odwb.be/api/explore/v2.1/catalog/datasets/communes_s3/records?limit=20`);
  }
}