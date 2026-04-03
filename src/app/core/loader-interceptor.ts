import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Loader } from '../service/loader';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const service = inject(Loader);
  service.show();
  return next(req).pipe(
    finalize(() => service.Hide())
  );
};
