import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Master } from '../service/master';

export const tokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  let service=inject(Master);
  var token = service.token();
  var clonerequest = req.clone({
    setHeaders: {
      Authorization: 'bearer ' + token
    }
  });
  return next(clonerequest);
};
