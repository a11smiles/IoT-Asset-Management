import { Injectable }               from '@angular/core';
import { Http, Headers }            from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Asset }            from '../models/asset';

@Injectable()
export class AssetService {
    private apiUrl = 'http://localhost:3000/api/';
    private headers: Headers;

    constructor(private _http: Http) { 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNDc0MjMzNjAzLCJleHAiOjE0NzQzMjAwMDN9.gIf0Lxxs50ExfHq3LDTw7gOYYdc9G0MRuL0wjFOeUvI');
    }

     getAssets(): Promise<Asset[]> {
        return this._http.get(this.apiUrl + 'assets', { headers: this.headers })
                   .toPromise()
                   .then(response => response.json() as Asset[])
                   .catch(this.handleError);
    }

    getAsset(id: number): Promise<Asset> {
        return this._http.get(this.apiUrl + 'assets/' + id, {headers: this.headers })
                    .toPromise()
                    .then(response => response.json() as Asset)
                    .catch(this.handleError);
    }

    update(asset: Asset): Promise<Asset> {
        return this._http.put(this.apiUrl + 'assets/' + asset.id, JSON.stringify(asset), {headers: this.headers})
                    .toPromise()
                    .then(response => response.json() as Asset)
                    .catch(this.handleError);
    }

    create(asset: Asset): Promise<Asset> {
        return this._http.post(this.apiUrl + 'assets', JSON.stringify(asset), {headers: this.headers})
                    .toPromise()
                    .then(response => response.json() as Asset)
                    .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        return this._http.delete(this.apiUrl + 'assets/' + id, {headers: this.headers})
                    .toPromise()
                    .then(() => null)
                    .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}