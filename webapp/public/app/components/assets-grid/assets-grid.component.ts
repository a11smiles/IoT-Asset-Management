import { Component, OnInit }        from '@angular/core';
import { Router, RouterLink }       from '@angular/router';

import { Asset }            from '../../models/asset';
import { AssetService }     from '../../services/asset.service';

@Component({
    moduleId: module.id,
    selector: 'assets-grid',
    templateUrl: 'assets-grid.component.html'
})

export class AssetsGridComponent implements OnInit {

    assets: Asset[] = [];

    constructor(
        private _assetService: AssetService,
        private _router: Router
    ) { }

    ngOnInit(): void {
        this._assetService.getAssets()
        .then(assets => this.assets = assets);
    }

    new(): void {
        this._router.navigate(['/asset']);
    }

    delete(id: number): void {
        this._assetService.delete(id)
            .then(() => this._assetService.getAssets()
                            .then(assets => this.assets = assets));
    }
}