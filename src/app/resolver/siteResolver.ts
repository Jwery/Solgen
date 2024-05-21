import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { SiteService } from '../services/site.service';
import { Site } from '../model/Site';
import { isEmpty } from 'rxjs';

export const siteResolver: ResolveFn<Site|null> = (route, state) => {
  const siteService = inject(SiteService);
  const cookieService = inject(CookieService);
  if(!cookieService.check("id")){
    return null
  }
  console.log("coucou")
  return siteService.getCurrentSite();
};