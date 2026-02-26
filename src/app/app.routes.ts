import { Routes } from '@angular/router';
import { authGuard } from './Guard/auth-guard';

export const routes: Routes = [
   
    {
        path: 'dashboard', loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard),canActivate:[authGuard],
        
    },
    {
        path: 'register', loadComponent: () => import('./TDF/register/register').then(m => m.Register)
    },
    {
        path: 'login', loadComponent: () => import('./TDF/login/login').then(m => m.Login)
    },
     {
        path: '**', loadComponent: () => import('./home/home').then(m => m.Home)
    }
];
