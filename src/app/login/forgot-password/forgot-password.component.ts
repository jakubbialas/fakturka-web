import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

    data: any = {};

    constructor(private router: Router,
                private authenticationService: AuthenticationService,
                private snack: MdSnackBar) {
    }

    ngOnInit() {
    }

    submit() {
        const me = this;

        me.authenticationService.remindPassword(this.data.email)
            .subscribe(() => {
                me.snack.open('Password reminder send');
                me.router.navigate(['/']);
            }, error => {
                me.snack.open(error._body);
            });
    }
}
