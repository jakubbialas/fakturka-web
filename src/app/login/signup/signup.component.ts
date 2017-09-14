import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

    public data = {
        email: undefined,
        password: undefined,
        repeatPassword: undefined,
    };

    constructor(private authenticationService: AuthenticationService,
                private router: Router,
                private snack: MdSnackBar) {
    }

    ngOnInit() {
    }

    public submit() {
        const me = this;

        this.authenticationService.register({
            email: this.data.email,
            password: this.data.password
        }).subscribe(() => {
            me.router.navigate(['/']);
            me.snack.open("User created, confirmation link was send");
        }, (error) => {
            me.snack.open(error._body);
        });
    }
}
