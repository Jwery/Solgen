import { Injectable, WritableSignal, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, tap } from 'rxjs';
import { AppUser } from '../model/user';
import { LoginForm } from '../model/loginForm';
import { FullUser } from '../model/fullUser';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Essay } from '../model/Essay';

@Injectable({
    providedIn: 'root'
  })
  export class EssayService {
    private essays: WritableSignal<Essay[]> = signal<Essay[]>([]);

  baseApiUrl : string = environment.apiUrl;

  constructor( private http: HttpClient, private cookieService : CookieService) {}

  getEssay():Observable<Essay[]>{
    const headers = { 'Authorization': 'Bearer  '+ this.cookieService.get('token') }
    return this.http.get<Essay[]>(this.baseApiUrl + 'Essay',{headers})
  }

  getEssayByNum(num:number):Observable<Essay[]>{
    const headers = { 'Authorization': 'Bearer  '+ this.cookieService.get('token') }
    return this.http.get<Essay[]>(this.baseApiUrl+'Essay/GetByNum/'+num,{headers})
  }

  getBySite(id:number):Observable<Essay[]>{
    const headers = { 'Authorization': 'Bearer  '+ this.cookieService.get('token') }
    return this.http.get<Essay[]>(this.baseApiUrl+'Essay/GetBySite/'+ id,{headers})
  }

  addEssay(essay: Essay) {
    const headers = { 'Authorization': 'bearer ' + this.cookieService.get('token')};
    return this.http.post<Essay>(this.baseApiUrl+'Essay', essay, {headers});
  }

  }
  