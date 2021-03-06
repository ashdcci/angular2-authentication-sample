import { Routes } from '@angular/router';
import { Home } from './home';
import { Login } from './login';
import { Signup } from './signup';
import {Upload} from './upload';
import {Dashboard} from './dashboard';
import { AuthGuard } from './common/auth.guard';
import { NonAuthGuard } from './common/nonauth.guard';

export const routes: Routes = [
  { path: '',       component: Login, canActivate: [NonAuthGuard] },
  { path: 'login',  component: Login, canActivate: [NonAuthGuard] },
  { path: 'signup', component: Signup, canActivate: [NonAuthGuard] },
  { path: 'home',   component: Home, canActivate: [AuthGuard] },
  { path:'upload',  component:Upload, canActivate: [AuthGuard]},
  { path:'dashboard',  component:Dashboard, canActivate: [AuthGuard]},
  { path: '**',     component: Login },
];
