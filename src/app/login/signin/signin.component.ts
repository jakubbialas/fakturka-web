import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { AuthService } from 'angular2-social-login';
import { ProfileService } from '../../shared/services/profile.service';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {

    data: any = {};
    returnUrl: string;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private authenticationService: AuthenticationService,
                private authService: AuthService,
                private profileService: ProfileService,
                private zone: NgZone,
                private snack: MdSnackBar) {
    }

    private onSuccess(result: any) {
        let data = result.json();
        if (data && data.token) {
            localStorage.setItem('token', data.token);
            this.profileService.refreshProfile();
            this.zone.run(() => {
                this.router.navigate(['/']);
            });
        }
    }

    private onFail(error: any) {
        const me = this;

        me.snack.open(error._body);
    }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        const me = this;

        this.authenticationService.login(this.data.email, this.data.password)
            .subscribe(result => {
                me.onSuccess(result);
            }, error => {
                me.onFail(error);
            });
    }

    loginGoogle() {
        const me = this;

        this.authService.login('google')
            .subscribe(
                data => {
                    me.authenticationService.loginGoogle(data)
                        .subscribe(result => {
                            me.onSuccess(result);
                        }, error => {
                            me.onFail(error);
                        });
                });
    }

    loginFacebook() {
        const me = this;
        this.authService.login('facebook')
            .subscribe(
                data => {
                    me.authenticationService.loginFacebook(data)
                        .subscribe(result => {
                            me.onSuccess(result);
                        }, error => {
                            me.onFail(error);
                        });
                });
    }
}
