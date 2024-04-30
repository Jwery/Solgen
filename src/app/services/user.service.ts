import { Injectable, WritableSignal, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: WritableSignal<User[]> = signal<User[]>([]);

  baseApiUrl : string = environment.apiUrl;


  constructor( private http: HttpClient) {}
   

  getuser():Observable<User[]>{
    return this.http.get<User[]>(this.baseApiUrl + 'AppUser')
  }
  add(User: User) {
    return this.http.post<User>(this.baseApiUrl, User).pipe(tap(Response => {
      this.users.update(u => [...u, Response])
    }));
  }

  getall(){
    return this.users;
  }

}

