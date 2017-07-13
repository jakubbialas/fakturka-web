import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {AuthorizationService} from "../shared/services";
import {AuthService} from "angular2-social-login";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    returnUrl: string;

    constructor(private route: ActivatedRoute,
                private authorizationService: AuthorizationService,
                private authService: AuthService) {
    }

    ngOnInit() {
        // reset login status
        this.authorizationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.authorizationService.login(this.model.username, this.model.password);
    }

    loginGoogle() {
        this.authService.login('google')
            .subscribe(
                data => {
                    this.authorizationService.loginGoogle(data)
                });
    }

    loginFacebook() {
        this.authService.login('facebook')
            .subscribe(
                data => {
                    this.authorizationService.loginFacebook(data)
                });
    }
}