import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Category } from './component/category/category';
import { Home } from './component/home/home';

export const routes: Routes = [
    /*{
        path: 'login', component: Login,
    },
    {
        path: 'dashboard', component: Dashboard,
    },
    {
        path: 'category', component: Category,
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full',
    },
    {
        path: '**', redirectTo: '/login',
    },*/
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },

    {
        path: '',
        component: Home,
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'category', component: Category },
        ]
    }
];
