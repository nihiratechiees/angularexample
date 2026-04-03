import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Master } from '../service/master';

export const tokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  let service=inject(Master);
 // var token = service.token();
 var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJ1c2VyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiYWRtaW4iLCJleHAiOjE3NzQ3ODI5MzYsImlzcyI6Ik5UIiwiYXVkIjoiTlRVc2VycyJ9.Q722dggkgxNWQG0hbd2q-8pietRyQfXoYIIyB5hCzxo';
  var clonerequest = req.clone({
    setHeaders: {
      Authorization: 'bearer ' + token
    }
  });
  return next(clonerequest);
};
