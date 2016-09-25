import { Component, OnInit }            from '@angular/core';
import { Router }               from '@angular/router';

import { AuthenticationService }    from '../../services/authentication.service';
import { Login }                    from '../../view-models/login';

@Component ({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit { 
    loginVM: Login;
    errorMsg: string;
    isLoading: boolean = true;
    
    constructor(
        private _router: Router,
        private _authService: AuthenticationService
    ) {
        this.loginVM = new Login();
     }

    ngOnInit(): void {
        if (!!localStorage.getItem('token')) {

            this._authService.verify(localStorage.getItem('token'))
                .then(isValid => {
                    if (!isValid)
                        localStorage.removeItem('token');
                    else
                        this._router.navigate(['']);

                    this.isLoading = false;
                });

        } else {
            localStorage.removeItem('token');
            this.isLoading = false;
        }
    }

    login():void {
        this._authService.authenticate(this.loginVM)
            .then(response => {
                if (response.success) {
                    this.errorMsg = null;
                    localStorage.setItem('token', response.token);
                    this._router.navigate(['']);

                } else {
                    this.errorMsg = response.message;
                }
            });
    }

}