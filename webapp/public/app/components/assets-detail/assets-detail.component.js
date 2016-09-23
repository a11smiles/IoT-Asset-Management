"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var asset_1 = require('../../models/asset');
var asset_service_1 = require('../../services/asset.service');
var location_service_1 = require('../../services/location.service');
var AssetsDetailComponent = (function () {
    function AssetsDetailComponent(_assetService, _locationService, _route) {
        this._assetService = _assetService;
        this._locationService = _locationService;
        this._route = _route;
    }
    AssetsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = +params['id'];
            if (!!id) {
                _this._assetService.getAsset(id)
                    .then(function (asset) {
                    _this.asset = asset;
                    _this.getLocation();
                });
            }
            else
                _this.asset = new asset_1.Asset();
        });
    };
    AssetsDetailComponent.prototype.save = function () {
        var _this = this;
        if (!!this.asset._id)
            this._assetService.update(this.asset)
                .then(function (asset) { return _this.asset = asset; });
        else
            this._assetService.create(this.asset)
                .then(function (asset) { return _this.asset = asset; });
    };
    AssetsDetailComponent.prototype.getLocation = function () {
        var _this = this;
        if (!!this.asset._id)
            setInterval(function () {
                _this._locationService.getLocation()
                    .then(function (response) {
                    _this.location = response;
                    //console.log(this.location[0].rssi); 
                });
            }, 5000);
    };
    AssetsDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'assets-detail',
            templateUrl: 'assets-detail.component.html'
        }), 
        __metadata('design:paramtypes', [asset_service_1.AssetService, location_service_1.LocationService, router_1.ActivatedRoute])
    ], AssetsDetailComponent);
    return AssetsDetailComponent;
}());
exports.AssetsDetailComponent = AssetsDetailComponent;
//# sourceMappingURL=assets-detail.component.js.map