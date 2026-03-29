import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { delay, retry, retryWhen, scan, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar'
import { count } from 'console';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snackbar = inject(MatSnackBar);
  return next(req).pipe(
    retry({
      count: 3,
      delay: 5000
    }),
    tap({
      next: (event) => {

      },
      error: (error: HttpErrorResponse) => {
        //handle error
        var message = error?.error?.message || "Something went wrong";
        var statuscode = error.status;
        if (statuscode != 0) {
          snackbar.open(statuscode + ' - ' + message, 'Close', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 5000
          }
          )
        }

      }
    })
  );
};
