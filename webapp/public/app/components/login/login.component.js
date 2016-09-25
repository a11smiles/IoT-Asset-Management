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
var authentication_service_1 = require('../../services/authentication.service');
var login_1 = require('../../view-models/login');
var LoginComponent = (function () {
    function LoginComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
        this.isLoading = true;
        this.loginVM = new login_1.Login();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!!localStorage.getItem('token')) {
            this._authService.verify(localStorage.getItem('token'))
                .then(function (isValid) {
                if (!isValid)
                    localStorage.removeItem('token');
                else
                    _this._router.navigate(['']);
                _this.isLoading = false;
            });
        }
        else {
            localStorage.removeItem('token');
            this.isLoading = false;
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._authService.authenticate(this.loginVM)
            .then(function (response) {
            if (response.success) {
                _this.errorMsg = null;
                localStorage.setItem('token', response.token);
                _this._router.navigate(['']);
            }
            else {
                _this.errorMsg = response.message;
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map