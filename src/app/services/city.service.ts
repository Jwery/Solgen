import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommunesService {

  private apiUrl = 'https://www.odwb.be/api/explore/v2.1/catalog/datasets/communes_s3/records';

  constructor(private http: HttpClient) { }

  getNomCourtsCommunes(limit: number): Observable<string[]> {
    const url = `${this.apiUrl}?limit=${limit}`;
    return this.http.get<any>(url).pipe(
      map(response => {
        return response.records.map((record: any) => record.fields.nom_court);
      })
    );
  }
}
