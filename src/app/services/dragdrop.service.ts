import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DragdropService {

  private apiUrl: string = '/api/Essay/FromFile/';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  uploadFile(fileData: FormGroup, idValue: number): Observable<any> {
    const headers = { 'Authorization': 'Bearer ' + this.cookieService.get('token') };
    return this.http.post(`${this.apiUrl}UploadFile/${idValue}`, fileData.value, { headers: headers });
  }

  GetEssayFromFile(fileName: string): Observable<any> {
    const headers = { 'Authorization': 'Bearer ' + this.cookieService.get('token') };
    const url = `${this.apiUrl}FromFile/${fileName}`;
    return this.http.get(url, { headers: headers });
  }
}