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

import { AssetService }        from './services/asset.service';

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
        AssetsDetailComponent
    ],
    providers: [
        AssetService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }