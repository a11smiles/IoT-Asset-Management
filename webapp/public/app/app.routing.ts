import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { DashboardComponent }       from './components/dashboard/dashboard.component';
import { AssetsComponent }          from './components/assets/assets.component';
import { AssetsDetailComponent }    from './components/assets-detail/assets-detail.component';

const appRoutes: Routes = [
    {
        path: 'asset/:id',
        component: AssetsDetailComponent
    },
    {
        path: 'asset',
        component: AssetsDetailComponent
    },
    {
        path: 'assets',
        component: AssetsComponent
    },
    {
        path: '',
        component: DashboardComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);