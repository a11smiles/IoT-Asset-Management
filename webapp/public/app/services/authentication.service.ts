import { Injectable }               from '@angular/core';
import { Http, Headers }            from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Login }            from '../view-models/login';
import { Config }           from '../app.config';

@Injectable()
export class AuthenticationService {
    headers: Headers;

    constructor(private _http: Http) { 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    authenticate(login):Promise<any>  {
        return this._http.post(Config.apiServer + '/authenticate', JSON.stringify(login), { headers: this.headers })
                   .toPromise()
                   .then(response => response.json())
                   .catch(this.handleError);
    }

    verify(token):Promise<boolean>  {
        return this._http.post(Config.apiServer + '/authenticate/verify', { 'token': token }, { headers: this.headers })
                   .toPromise()
                   .then(response => response.json().success)
                   .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}