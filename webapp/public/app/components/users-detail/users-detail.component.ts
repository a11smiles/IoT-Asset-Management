import { Component, Input, OnInit }         from '@angular/core';
import { ActivatedRoute, Params }           from '@angular/router';

import { User }                            from '../../models/user';
import { UserService }                     from '../../services/user.service';

@Component({
    moduleId: module.id,
    selector: 'users-detail',
    templateUrl: 'users-detail.component.html'
})

export class UsersDetailComponent implements OnInit {
    user: User;
    
    constructor(
        private _userService: UserService,
        private _route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this._route.params.forEach((params: Params) => {
            let username = params['username'];
            if (!!username) {
                this._userService.getUser(username)
                    .then(user => this.user = user);
            } else 
                this.user = new User();
        });
    }

    save(): void {
        if (!!this.user._id)
            this._userService.update(this.user)
                .then(user => this.user = user);
        else
            this._userService.create(this.user)
                .then(user => this.user = user);
    }
}
