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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var app_component_1 = require('./components/app/app.component');
var menu_component_1 = require('./components/menu/menu.component');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var assets_component_1 = require('./components/assets/assets.component');
var assets_grid_component_1 = require('./components/assets-grid/assets-grid.component');
var assets_detail_component_1 = require('./components/assets-detail/assets-detail.component');
var users_component_1 = require('./components/users/users.component');
var users_grid_component_1 = require('./components/users-grid/users-grid.component');
var users_detail_component_1 = require('./components/users-detail/users-detail.component');
var login_component_1 = require('./components/login/login.component');
var asset_service_1 = require('./services/asset.service');
var user_service_1 = require('./services/user.service');
var location_service_1 = require('./services/location.service');
var authentication_service_1 = require('./services/authentication.service');
var authguard_1 = require('./guards/authguard');
var custom_date_pipe_1 = require('./infrastructure/custom-date.pipe');
require('./rxjs-extensions');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
                ng2_bootstrap_1.Ng2BootstrapModule
            ],
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                dashboard_component_1.DashboardComponent,
                assets_component_1.AssetsComponent,
                assets_grid_component_1.AssetsGridComponent,
                assets_detail_component_1.AssetsDetailComponent,
                users_component_1.UsersComponent,
                users_grid_component_1.UsersGridComponent,
                users_detail_component_1.UsersDetailComponent,
                login_component_1.LoginComponent,
                custom_date_pipe_1.CustomDatePipe
            ],
            providers: [
                asset_service_1.AssetService,
                user_service_1.UserService,
                location_service_1.LocationService,
                authentication_service_1.AuthenticationService,
                authguard_1.AuthGuard
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map