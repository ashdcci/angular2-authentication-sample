import {Injectable} from '@angular/core';
import {Http,RequestOptionsArgs} from '@angular/http'
import {Headers} from '@angular/http'
import {RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import { contentHeaders } from '../common/headers';

@Injectable()
export class Common{
	constructor(private http:Http){
		console.log('Common Service initialised...')
	}

  uploadFile(fileList){

    if(fileList.length > 0) {
        let file: File = fileList[0];
        console.log(file)
        let formData:FormData = new FormData();
        formData.append('image', file, file.name);
        formData.append('image_name', 'hello');
        // let headers = new Headers();
        // headers.append('Content-Type', 'multipart/form-data');
        // headers.append('Accept', 'application/json');
        // let options = new RequestOptions({ headers: headers });

				let options: RequestOptionsArgs = new RequestOptions();
					 options.headers = new Headers();
				console.log(options)
        this.http.post('http://localhost:3001/api/upload-handler', formData, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )


    }


    // var headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // return this.http.post('http://localhost:3001/upload', newFile, {headers: headers})
    //     .map(res => res.json());
  }

  sendRequest(){
    var username = 'check';
    var password = 'pwd';
    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:3001/api/checker', body, { headers: contentHeaders })
      .subscribe(
        response => {
          console.log(response.json())
        },
        error => {

          console.log(error.text());
        }
      );
  }

}
