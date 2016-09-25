import { Component, Input } from '@angular/core';
import { Router }               from '@angular/router';

@Component ({
    moduleId: module.id,
    selector: 'main-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})

export class MenuComponent {
    @Input()
    title: string;

    constructor(
        private _router: Router
    ) {}

    logout():void {
        localStorage.removeItem('token');

        this._router.navigate(['/login']);
    }
 }