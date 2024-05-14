import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Site } from '../model/Site'
import { SiteService } from './site.service';
import { CityService } from './city.service';
import { isEmpty } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InfochantierService {

  constructor(private http: HttpClient, private cookieservice: CookieService ) {
    
  }

  // Méthode pour envoyer Les infos à l'API
  addSite(site: Site) {
    const headers = { 'Authorization': 'Bearer  '+ this.cookieservice.get('token') }
    return this.http.post('/api/Sites', site,{ headers });
  }
}
