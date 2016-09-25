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
var user_service_1 = require('../../services/user.service');
var UsersGridComponent = (function () {
    function UsersGridComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.users = [];
    }
    UsersGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUsers()
            .then(function (users) { return _this.users = users; });
    };
    UsersGridComponent.prototype.new = function () {
        this._router.navigate(['/user']);
    };
    UsersGridComponent.prototype.delete = function (username) {
        var _this = this;
        this._userService.delete(username)
            .then(function () { return _this._userService.getUsers()
            .then(function (users) { return _this.users = users; }); });
    };
    UsersGridComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'users-grid',
            templateUrl: 'users-grid.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], UsersGridComponent);
    return UsersGridComponent;
}());
exports.UsersGridComponent = UsersGridComponent;
//# sourceMappingURL=users-grid.component.js.map