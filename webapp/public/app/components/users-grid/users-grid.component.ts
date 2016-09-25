import { Component, OnInit }        from '@angular/core';
import { Router, RouterLink }       from '@angular/router';

import { User }            from '../../models/user';
import { UserService }     from '../../services/user.service';

@Component({
    moduleId: module.id,
    selector: 'users-grid',
    templateUrl: 'users-grid.component.html'
})

export class UsersGridComponent implements OnInit {

    users: User[] = [];

    constructor(
        private _userService: UserService,
        private _router: Router
    ) { }

    ngOnInit(): void {
        this._userService.getUsers()
        .then(users => this.users = users);
    }

    new(): void {
        this._router.navigate(['/user']);
    }

    delete(username: string): void {
        this._userService.delete(username)
            .then(() => this._userService.getUsers()
                            .then(users => this.users = users));
    }
}