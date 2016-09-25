import { Injectable }               from '@angular/core';
import { Http, Headers }            from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { IBeacon }          from '../models/ibeacon';
import { Config }           from '../app.config';

@Injectable()
export class LocationService {
    private headers: Headers;

    constructor(private _http: Http) { 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append('x-access-token', localStorage.getItem('token'));
    }

    getLocation(uuid): Promise<IBeacon> {
        var body = JSON.stringify({ 
                        databaseId : 'messages',
                        collectionId : 'raspberry',
                        querySpec: {
                            query: "SELECT TOP 10 * FROM root WHERE root.uuid = @uuid ORDER BY root.EventEnqueuedUtcTime DESC",
                            parameters: [{
                                name: '@uuid',
                                value: uuid
                            }]
                        } 
                    });

        return this._http.post(Config.apiServerUrl + '/azure/docdb', body, { headers: this.headers })
                   .toPromise()
                   .then(response => response.json() as IBeacon)
                   .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    
}