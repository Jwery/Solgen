import { Injectable ,WritableSignal, signal} from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Site } from '../model/Site';

@Injectable({
    providedIn: 'root'
  })
  export class SiteService {

    private sites: WritableSignal<Site[]> = signal<Site[]>([]);

  baseApiUrl : string = environment.apiUrl;

  constructor( private http: HttpClient, private cookieService : CookieService) {}

  getSites():Observable<Site[]>{
    const headers = { 'Authorization': 'Bearer  '+ this.cookieService.get('token') }
    console.log(this.baseApiUrl + 'Sites')
    return this.http.get<Site[]>(this.baseApiUrl + 'Sites',{headers})
  }

  getByName(name:string):Observable<Site[]>{
    const headers = { 'Authorization': 'Bearer  '+ this.cookieService.get('token') }
    return this.http.get<Site[]>(this.baseApiUrl+'Sites/GetByName/'+name,{headers})
  }

  getById(id:string):Promise<Site>{
    const headers = { 'Authorization': 'Bearer  '+ this.cookieService.get('token') }
    console.log('Bearer  '+ this.cookieService.get('token'))
    console.log(this.baseApiUrl+'Sites/'+id)
    return firstValueFrom(this.http.get<Site>(this.baseApiUrl+'Sites/'+id,{headers}))
  }

  getCurrentSite():Promise<Site>{
    return this.getById(this.cookieService.get("id"))
  }

  update(site:Site):Observable<Site>{
    const headers = { 'Authorization': 'Bearer  '+ this.cookieService.get('token') }
    return this.http.put<Site>(this.baseApiUrl+'Sites/'+site.id,site,{headers})
  }
}