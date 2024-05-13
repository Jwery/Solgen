import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragdropService {

  private apiUrl = '/api/Essay/FormFile';

  constructor(private http: HttpClient) { }

  GetEssayFromFile(fileName: string): Observable<any> {
    
    const url = `${this.apiUrl}/${fileName}`;
    return this.http.get(url);
  }
}
