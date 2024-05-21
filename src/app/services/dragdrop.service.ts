import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {FormGroup} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class DragdropService {

  private apiUrl = '/api/Essay/FromFile';

  constructor(private http: HttpClient, private cookieservice: CookieService) { }

  uploadFile(fileData: FormGroup,idValue:number): Observable<any> {
    const headers = { 'Authorization': 'Bearer ' + this.cookieservice.get('token') };
    return this.http.post(`${this.apiUrl}/UploadFile/`+idValue, fileData.value, { headers });
  }

  GetEssayFromFile(fileName: string): Observable<any> {
    const headers = { 'Authorization': 'Bearer ' + this.cookieservice.get('token') };
    const url = `${this.apiUrl}/FromFile/${fileName}`;
    return this.http.get(url, { headers });
  }
}
