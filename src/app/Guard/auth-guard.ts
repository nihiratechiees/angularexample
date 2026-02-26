
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Master } from '../service/master';

export const authGuard: CanActivateFn = (route, state) => {
  // debugger;
   const service=inject(Master);
   const router=inject(Router);
   debugger;
  if(!service.Isloggedin()){
   // alert("Please login to access this page");
     router.navigate(['/login']);
    return false;
  }
  return true;
};
