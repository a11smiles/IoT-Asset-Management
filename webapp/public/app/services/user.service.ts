import { Injectable }               from '@angular/core';
import { Http, Headers }            from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User }            from '../models/user';
import { Config }           from '../app.config';

@Injectable()
export class UserService {
    private headers: Headers;

    constructor(private _http: Http) { 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append('x-access-token', localStorage.getItem('token'));
    }

     getUsers(): Promise<User[]> {
        return this._http.get(Config.apiServerUrl + '/users', { headers: this.headers })
                   .toPromise()
                   .then(response => response.json() as User[])
                   .catch(this.handleError);
    }

    getUser(username: string): Promise<User> {
        return this._http.get(Config.apiServerUrl + '/users/' + username, {headers: this.headers })
                    .toPromise()
                    .then(response => response.json() as User)
                    .catch(this.handleError);
    }

    update(user: User): Promise<User> {
        return this._http.put(Config.apiServerUrl + '/users/' + user.username, JSON.stringify(user), {headers: this.headers})
                    .toPromise()
                    .then(response => response.json() as User)
                    .catch(this.handleError);
    }

    create(user: User): Promise<User> {
        return this._http.post(Config.apiServerUrl + '/users', JSON.stringify(user), {headers: this.headers})
                    .toPromise()
                    .then(response => response.json() as User)
                    .catch(this.handleError);
    }

    delete(username: string): Promise<void> {
        return this._http.delete(Config.apiServerUrl + '/users/' + username, {headers: this.headers})
                    .toPromise()
                    .then(() => null)
                    .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}