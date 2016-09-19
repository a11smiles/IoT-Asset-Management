"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var assets_component_1 = require('./components/assets/assets.component');
var assets_detail_component_1 = require('./components/assets-detail/assets-detail.component');
var users_component_1 = require('./components/users/users.component');
var users_detail_component_1 = require('./components/users-detail/users-detail.component');
var appRoutes = [
    {
        path: 'asset/:id',
        component: assets_detail_component_1.AssetsDetailComponent
    },
    {
        path: 'asset',
        component: assets_detail_component_1.AssetsDetailComponent
    },
    {
        path: 'assets',
        component: assets_component_1.AssetsComponent
    },
    {
        path: 'user/:username',
        component: users_detail_component_1.UsersDetailComponent
    },
    {
        path: 'user',
        component: users_detail_component_1.UsersDetailComponent
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent
    },
    {
        path: '',
        component: dashboard_component_1.DashboardComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map