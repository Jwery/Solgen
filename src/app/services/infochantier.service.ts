import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from '../model/Site';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfochantierService {

  baseApiUrl : string = environment.apiUrl;

  constructor(private http: HttpClient, private cookieservice: CookieService) { }

  addSite(site: Site):Promise<Site> {
    const headers = { 'Authorization': 'Bearer ' + this.cookieservice.get('token') };
    return firstValueFrom(this.http.post<Site>(this.baseApiUrl+'Sites', site, { headers }));
  }
}
