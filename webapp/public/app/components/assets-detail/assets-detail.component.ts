import { Component, Input, OnInit }         from '@angular/core';
import { ActivatedRoute, Params }           from '@angular/router';

import { Asset }                            from '../../models/asset';
import { AssetService }                     from '../../services/asset.service';

@Component({
    moduleId: module.id,
    selector: 'assets-detail',
    templateUrl: 'assets-detail.component.html'
})

export class AssetsDetailComponent implements OnInit {
    asset: Asset;
    
    constructor(
        private _assetService: AssetService,
        private _route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this._route.params.forEach((params: Params) => {
            let id = +params['id'];
            if (!!id) {
                this._assetService.getAsset(id)
                    .then(asset => this.asset = asset);
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
}
