import { Routes } from '@angular/router';
import { authGuard } from './Guard/auth-guard';
import { Reactivex } from './reactivex/reactivex';
import { Tablex } from './tablex/tablex';

export const routes: Routes = [

    {
        path: 'dashboard', loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard), canActivate: [authGuard],

    },
    {
        path: 'register', loadComponent: () => import('./TDF/register/register').then(m => m.Register)
    },
    {
        path: 'login', loadComponent: () => import('./TDF/login/login').then(m => m.Login)
    },
    {
        path: 'registerrf', loadComponent: () => import('./RF/register/register').then(m => m.Register)
    },
    {
        path: 'loginrf', loadComponent: () => import('./RF/login/login').then(m => m.Login)
    },
    {
        path: 'reactive', component: Reactivex
    },
    {
        path: 'table', component: Tablex
    },
    {
        path: '**', loadComponent: () => import('./home/home').then(m => m.Home)
    }
];
