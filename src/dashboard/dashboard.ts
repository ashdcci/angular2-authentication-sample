import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
const template = require('./dashboard.html');
@Component({
    // selector: 'dashboard',
    // template: 'dashboard.html'
    // moduleId: module.id,
    selector: 'dashboard',
    template: template,
})
export class Dashboard {

  constructor(public router: Router, public http: Http) {

  }
}
