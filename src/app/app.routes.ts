import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { App } from './app';
import { Login } from './login/login';

export const routes: Routes = [

    {
        path: 'login', component: Login,
    },
    {
        path: 'dashboard', component: Dashboard,
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full',
    },
    {
        path: '**', redirectTo: '/login',
    },
];
