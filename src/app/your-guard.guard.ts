import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const LoggedGuard: CanActivateFn = (route, state) => { 
  const cookieService = inject(CookieService);
  if(cookieService.check('token')){
    return true;
}

const router = inject(Router);

router.navigate(['/connexion']);

return false;
};
