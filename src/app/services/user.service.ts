import { Injectable, WritableSignal, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AppUser } from '../model/user';
import { LoginForm } from '../model/loginForm';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: WritableSignal<AppUser[]> = signal<AppUser[]>([]);

  baseApiUrl : string = environment.apiUrl;


  constructor( private http: HttpClient) {}
   

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
        console.log(response)
        this.token.update(u=>response)
      }))
  }
  token: WritableSignal<string> = signal<string> ('');

}

