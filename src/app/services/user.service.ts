import { Injectable, WritableSignal, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, tap } from 'rxjs';
import { AppUser } from '../model/user';
import { LoginForm } from '../model/loginForm';
import { FullUser } from '../model/fullUser';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: WritableSignal<AppUser[]> = signal<AppUser[]>([]);

  baseApiUrl : string = environment.apiUrl;

  constructor( private http: HttpClient, private cookieService : CookieService) {}

  getuser():Observable<AppUser[]>{
    return this.http.get<AppUser[]>(this.baseApiUrl + 'AppUser')
  }

  add(User: AppUser) {
    return this.http.post<AppUser>(this.baseApiUrl + 'AppUser', User)
    .pipe(tap(response => {
    this.users.update(u => [...u, response])
    }))
  }

  getall(){
    return this.users;
  }

  login(User:LoginForm){
    return this.http.post<string>(this.baseApiUrl + 'Appuser/login',User)
    .pipe(tap(response => {
        this.cookieService.set('token', response);
      }))
  }

  logOut(){
    this.cookieService.delete('token')
  }
   
  update(User:FullUser){
    const headers = { 'Authorization': 'Bearer  '+ this.cookieService.get('token') }
    let UserModified:AppUser={
      firstName:User.firstName,
      lastName:User.lastName,
      email:User.email,
      password:User.password
    }
   
    console.log(UserModified)
    console.log(this.baseApiUrl + 'Appuser/'+User.id)
    return this.http.put<FullUser>(this.baseApiUrl + 'Appuser/'+User.id,UserModified,{headers})
  }

  getLoggedUser(){
    const headers = { 'Authorization': 'Bearer  '+ this.cookieService.get('token') }
    console.log(this.baseApiUrl + 'AppUser/GetLoginUser')
    return firstValueFrom(this.http.get<FullUser>(this.baseApiUrl + 'AppUser/GetLoginUser',{headers}))
  }

  islogged(){
    return (this.cookieService.check('token'))
  }

}

