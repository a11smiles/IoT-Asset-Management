"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var assets_component_1 = require('./components/assets/assets.component');
var assets_detail_component_1 = require('./components/assets-detail/assets-detail.component');
var users_component_1 = require('./components/users/users.component');
var users_detail_component_1 = require('./components/users-detail/users-detail.component');
var login_component_1 = require('./components/login/login.component');
var authguard_1 = require('./guards/authguard');
var appRoutes = [
    {
        path: 'asset/:id',
        component: assets_detail_component_1.AssetsDetailComponent,
        canActivate: [authguard_1.AuthGuard]
    },
    {
        path: 'asset',
        component: assets_detail_component_1.AssetsDetailComponent,
        canActivate: [authguard_1.AuthGuard]
    },
    {
        path: 'assets',
        component: assets_component_1.AssetsComponent,
        canActivate: [authguard_1.AuthGuard]
    },
    {
        path: 'user/:username',
        component: users_detail_component_1.UsersDetailComponent,
        canActivate: [authguard_1.AuthGuard]
    },
    {
        path: 'user',
        component: users_detail_component_1.UsersDetailComponent,
        canActivate: [authguard_1.AuthGuard]
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent,
        canActivate: [authguard_1.AuthGuard]
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
    },
    {
        path: '',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [authguard_1.AuthGuard]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map