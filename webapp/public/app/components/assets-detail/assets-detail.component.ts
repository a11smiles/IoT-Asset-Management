import { Component, Input, OnInit }         from '@angular/core';
import { ActivatedRoute, Params }           from '@angular/router';

import { Asset }                            from '../../models/asset';
import { AssetService }                     from '../../services/asset.service';
import { LocationService }                  from '../../services/location.service';
import { IBeacon }                          from '../../models/ibeacon';

@Component({
    moduleId: module.id,
    selector: 'assets-detail',
    templateUrl: 'assets-detail.component.html'
})

export class AssetsDetailComponent implements OnInit {
    asset: Asset;
    location: IBeacon;
    
    constructor(
        private _assetService: AssetService,
        private _locationService: LocationService,
        private _route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this._route.params.forEach((params: Params) => {
            let id = +params['id'];
            if (!!id) {
                this._assetService.getAsset(id)
                    .then(asset => {
                        this.asset = asset;
                        this.getLocation();
                    });
            } else 
                this.asset = new Asset();
        });
    }

    save(): void {
        if (!!this.asset._id)
            this._assetService.update(this.asset)
                .then(asset => this.asset = asset);
        else
            this._assetService.create(this.asset)
                .then(asset => this.asset = asset);
    }

    getLocation(): void {
        if (!!this.asset._id)
            setInterval(() => {
                this._locationService.getLocation()
                    .then(response => { 
                        this.location = response;
                        //console.log(this.location[0].rssi); 
                    });
            }, 5000);
    }
}
