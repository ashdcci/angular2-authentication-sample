import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Common} from './services/common'

const template = require('./app.html');

@Component({
  selector: 'auth-app',
  template: template,
  providers: [Common]
})

export class App {
  constructor(public router: Router) {}
}
