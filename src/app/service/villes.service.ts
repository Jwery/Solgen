import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VillesService {

  url: string = "https://www.odwb.be/api/explore/v2.1/catalog/datasets/communesgemeente-belgium/records?limit=20"

  constructor() {


   }
}
