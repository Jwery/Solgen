import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragdropService {

  private apiUrl = '/api/Essay/FormFile';

  constructor(private http: HttpClient) { }

  GetEssayFromFile(link:string):Observable<any> {
    const url = '${this.apiUrl}/${link}';
    return this.http.get(url);
  }
}
