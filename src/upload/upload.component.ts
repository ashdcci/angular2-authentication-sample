import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {Common} from '../services/common'

const styles   = require('./upload.component.scss');
const template = require('./upload.html');
@Component({
    selector: 'upload',
    template: template,
    styleUrls: []
})
export class Upload {

  constructor(public router: Router, public http: Http,private commonService:Common) {
    console.log(54566)
  }

  onChange(event) {
    var files = event.srcElement.files;
    this.commonService.uploadFile(files);
  }

  onClick(){
    this.commonService.sendRequest();
  }
}
