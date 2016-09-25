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
var user_1 = require('../../models/user');
var user_service_1 = require('../../services/user.service');
var UsersDetailComponent = (function () {
    function UsersDetailComponent(_userService, _route) {
        this._userService = _userService;
        this._route = _route;
    }
    UsersDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var username = params['username'];
            if (!!username) {
                _this._userService.getUser(username)
                    .then(function (user) {
                    _this.user = user;
                    _this.user.password = null;
                });
            }
            else
                _this.user = new user_1.User();
        });
    };
    UsersDetailComponent.prototype.save = function () {
        var _this = this;
        if (!!this.user._id)
            this._userService.update(this.user)
                .then(function (user) {
                _this.user = user;
                _this.user.password = null;
            });
        else
            this._userService.create(this.user)
                .then(function (user) {
                _this.user = user;
                _this.user.password = null;
            });
    };
    UsersDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'users-detail',
            templateUrl: 'users-detail.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute])
    ], UsersDetailComponent);
    return UsersDetailComponent;
}());
exports.UsersDetailComponent = UsersDetailComponent;
//# sourceMappingURL=users-detail.component.js.map