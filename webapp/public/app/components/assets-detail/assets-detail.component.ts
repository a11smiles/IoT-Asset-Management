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
    locations: IBeacon[] = [];
    
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
        if (!!this.asset._id && !!this.asset.uuid)
            setInterval(() => {
                this._locationService.getLocation(this.asset.uuid)
                    .then(response => { 
                        this.locations = this.filterLocations(response);
                    });
            }, 5000);
    }

    private filterLocations(data): IBeacon[] {
        var locs:IBeacon[] = [];

        // get distinct devices
        var devices:string[] = [];
        for (var i = 0; i < data.length; i++) 
            if (devices.indexOf(data[i].IoTHub.ConnectionDeviceId) == -1)
                devices.push(data[i].IoTHub.ConnectionDeviceId);
        
        // sort devices
        devices.sort();

        // for each device, get the latest time and add to location array
        for (var j = 0; j < devices.length; j++) {
            var devLocs:IBeacon[] = [];

            // only get locations for that device
            devLocs = data.filter(function(loc) {
                return loc.IoTHub.ConnectionDeviceId == devices[j];
            });

            // sort locations descending
            devLocs.sort(function(a, b){
                var c = new Date(a.EventEnqueuedUtcTime);
                var d = new Date(b.EventEnqueuedUtcTime);

                if (d > c) return 1;
                else if (d == c) return 0;
                else if (d < c) return -1;
            });

            // add device location to array
            locs.push(devLocs[0]);
        }

        return locs;
    }
}
