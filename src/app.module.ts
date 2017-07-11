import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {DataTableModule} from "angular2-datatable";

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AuthGuard } from './common/auth.guard';
import { NonAuthGuard } from './common/nonauth.guard';
import { Home } from './home';
import { Login } from './login';
import { Signup } from './signup';
import { App } from './app';
import { DataFilterPipe }   from './common/data-filter.pipe';

import { routes } from './app.routes';

@NgModule({
  bootstrap: [App],
  declarations: [
    Home, Login, Signup, App, DataFilterPipe
  ],
  imports: [
    HttpModule, BrowserModule, FormsModule,DataTableModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
    AuthGuard,NonAuthGuard, ...AUTH_PROVIDERS
  ]
})
export class AppModule {}
