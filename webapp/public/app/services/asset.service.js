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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var app_config_1 = require('../app.config');
var AssetService = (function () {
    function AssetService(_http) {
        this._http = _http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append('x-access-token', localStorage.getItem('token'));
    }
    AssetService.prototype.getAssets = function () {
        return this._http.get(app_config_1.Config.apiServerUrl + '/assets', { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AssetService.prototype.getAsset = function (id) {
        return this._http.get(app_config_1.Config.apiServerUrl + '/assets/' + id, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AssetService.prototype.update = function (asset) {
        return this._http.put(app_config_1.Config.apiServerUrl + '/assets/' + asset.id, JSON.stringify(asset), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AssetService.prototype.create = function (asset) {
        return this._http.post(app_config_1.Config.apiServerUrl + '/assets', JSON.stringify(asset), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AssetService.prototype.delete = function (id) {
        return this._http.delete(app_config_1.Config.apiServerUrl + '/assets/' + id, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    AssetService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AssetService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AssetService);
    return AssetService;
}());
exports.AssetService = AssetService;
//# sourceMappingURL=asset.service.js.map