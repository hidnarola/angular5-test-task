import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
// import 'rxjs/add/operator/map';
import { Console } from '@angular/core/src/console';

@Injectable()
export class CommonServiceService {
  private headers = new Headers({ 'X-XSRF-TOKEN': localStorage.getItem('x_xrsf_token'), 'X-FALCON-TOKEN': localStorage.getItem('x_falcon_token') });
  constructor(private http: HttpClient) { }
  login(data) {
    return this.http.post('https://api.amalyze.com/0.0.12/system.user.login', data, { observe: 'response' });
  }
  getUserStore() {
    return this.http.post('https://api.amalyze.com/0.0.12/system.user.status',{},
    {headers:
      { 
        'X-XSRF-TOKEN': localStorage.getItem('x_xrsf_token'), 
        'X-FALCON-TOKEN': localStorage.getItem('x_falcon_token'),
        'Access-Control-Allow-Origin': '*'
      }});
  }
}
