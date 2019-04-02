import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { Login3Component } from './login3/login3.component';
import { Login4Component } from './login4/login4.component';


export const routes: Routes = [
    { path: '', component: Login1Component },
    { path: 'login1', component: Login1Component },
    { path: 'login2', component: Login2Component },
    { path: 'login3', component: Login3Component },
    { path: 'login4', component: Login4Component }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
