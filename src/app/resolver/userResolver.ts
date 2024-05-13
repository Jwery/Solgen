import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { map } from 'rxjs';
import { UserService } from '../services/user.service';
import { FullUser } from '../model/fullUser';

export const userResolver: ResolveFn<FullUser> = (route, state) => {

  const userService = inject(UserService);
  return userService.getLoggedUser();
};