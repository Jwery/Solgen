import { Injectable, WritableSignal, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, tap } from 'rxjs';
import { AppUser } from '../model/user';
import { LoginForm } from '../model/loginForm';
import { FullUser } from '../model/fullUser';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Site } from '../model/Site';

@Injectable({
    providedIn: 'root'
  })
  export class SiteService {

  baseApiUrl : string = environment.apiUrl;

  constructor( private http: HttpClient, private cookieService : CookieService) {}

  getSites():Observable<Site[]>{
    const headers = { 'Authorization': 'Bearer  '+ this.cookieService.get('token') }
    return this.http.get<Site[]>(this.baseApiUrl + 'Sites',{headers})
  }

  getByName(name:string):Observable<Site[]>{
    const headers = { 'Authorization': 'Bearer  '+ this.cookieService.get('token') }
    return this.http.get<Site[]>(this.baseApiUrl+'Sites/GetByName/'+name,{headers})
  }
}