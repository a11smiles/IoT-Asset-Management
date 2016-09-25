import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { DashboardComponent }       from './components/dashboard/dashboard.component';
import { AssetsComponent }          from './components/assets/assets.component';
import { AssetsDetailComponent }    from './components/assets-detail/assets-detail.component';
import { UsersComponent }           from './components/users/users.component';
import { UsersDetailComponent }     from './components/users-detail/users-detail.component';
import { LoginComponent }           from './components/login/login.component';

import { AuthGuard }                from './guards/authguard';

const appRoutes: Routes = [
    {
        path: 'asset/:id',
        component: AssetsDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'asset',
        component: AssetsDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'assets',
        component: AssetsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user/:username',
        component: UsersDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user',
        component: UsersDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);