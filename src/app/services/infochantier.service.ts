import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class InfochantierService {

  constructor(private http: HttpClient, private cookieservice: CookieService) { }

  // Méthode pour envoyer la ville à l'API
  addCityToSite(site: string) {
    const headers = { 'Authorization': 'Bearer  '+ this.cookieservice.get('token') }
    return this.http.post('/api/Sites', { headers });
  }
}
