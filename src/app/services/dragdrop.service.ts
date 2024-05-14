import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DragdropService {

  private apiUrl = '/api/Essay/FromFile';

  constructor(private http: HttpClient, private cookieservice: CookieService) { }

  GetEssayFromFile(fileName: string): Observable<any> {
  const headers = { 'Authorization': 'Bearer  '+ this.cookieservice.get('token') }
    const url = `${this.apiUrl}/${fileName}`;
    return this.http.get(url, {headers});
  }
}
