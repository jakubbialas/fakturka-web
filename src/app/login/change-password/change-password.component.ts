import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent implements OnInit {

    public data: any = {};
    public tokenValid: boolean = undefined;
    private token: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService,
                private snack: MdSnackBar) {
    }

    ngOnInit() {
        this.token = this.route.snapshot.queryParams['token'];
        this.authenticationService.validateToken(this.token)
            .subscribe(() => {
                this.tokenValid = true;
            }, () => {
                this.tokenValid = false;
            });
    }

    public submit() {
        const me = this;

        this.authenticationService.resetPassword(this.token, this.data.password)
            .subscribe(() => {
                me.snack.open('Password changed');
                me.router.navigate(['/']);
            }, (error) => {
                me.snack.open(error._body);
            });
    }
}
