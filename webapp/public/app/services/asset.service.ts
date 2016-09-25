import { Injectable }               from '@angular/core';
import { Http, Headers }            from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Asset }            from '../models/asset';
import { Config }           from '../app.config';

@Injectable()
export class AssetService {
    private headers: Headers;

    constructor(private _http: Http) { 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append('x-access-token', localStorage.getItem('token'));
    }

     getAssets(): Promise<Asset[]> {
        return this._http.get(Config.apiServerUrl + '/assets', { headers: this.headers })
                   .toPromise()
                   .then(response => response.json() as Asset[])
                   .catch(this.handleError);
    }

    getAsset(id: number): Promise<Asset> {
        return this._http.get(Config.apiServerUrl + '/assets/' + id, {headers: this.headers })
                    .toPromise()
                    .then(response => response.json() as Asset)
                    .catch(this.handleError);
    }

    update(asset: Asset): Promise<Asset> {
        return this._http.put(Config.apiServerUrl + '/assets/' + asset.id, JSON.stringify(asset), {headers: this.headers})
                    .toPromise()
                    .then(response => response.json() as Asset)
                    .catch(this.handleError);
    }

    create(asset: Asset): Promise<Asset> {
        return this._http.post(Config.apiServerUrl + '/assets', JSON.stringify(asset), {headers: this.headers})
                    .toPromise()
                    .then(response => response.json() as Asset)
                    .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        return this._http.delete(Config.apiServerUrl + '/assets/' + id, {headers: this.headers})
                    .toPromise()
                    .then(() => null)
                    .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}