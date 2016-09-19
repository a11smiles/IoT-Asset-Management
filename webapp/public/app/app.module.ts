import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { routing }          from './app.routing';
import { Ng2BootstrapModule }   from 'ng2-bootstrap/ng2-bootstrap'

import { AppComponent }         from './components/app/app.component';
import { MenuComponent }        from './components/menu/menu.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { AssetsComponent }      from './components/assets/assets.component';
import { AssetsGridComponent }      from './components/assets-grid/assets-grid.component';
import { AssetsDetailComponent }    from './components/assets-detail/assets-detail.component';
import { UsersComponent }           from './components/users/users.component';
import { UsersGridComponent }       from './components/users-grid/users-grid.component';
import { UsersDetailComponent }     from './components/users-detail/users-detail.component';
import { LoginComponent }           from './components/login/login.component';

import { AssetService }             from './services/asset.service';
import { UserService }              from './services/user.service';
import { AuthenticationService }    from './services/authentication.service';
import { AuthGuard }                from './guards/authguard';

import './rxjs-extensions';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        Ng2BootstrapModule
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        DashboardComponent,
        AssetsComponent,
        AssetsGridComponent,
        AssetsDetailComponent,
        UsersComponent,
        UsersGridComponent,
        UsersDetailComponent,
        LoginComponent
    ],
    providers: [
        AssetService,
        UserService,
        AuthenticationService,
        AuthGuard
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }