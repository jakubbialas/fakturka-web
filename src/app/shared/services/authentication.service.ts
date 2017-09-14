import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationService {
    private authUrl;

    constructor(private http: Http,
                private router: Router,
                private profileService: ProfileService) {
        this.authUrl = environment.api.url + '/auth';
    }

    private getHeaders() {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return options;
    }

    login(username: string, password: string) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.authUrl + '/login', JSON.stringify({
            username: username,
            password: password
        }), options);
            // .subscribe(result => {
            //     let data = result.json();
            //     if (data && data.token) {
            //         localStorage.setItem('token', data.token);
            //     }
            // });
    }

    loginGoogle(data: any) {
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.authUrl + '/google', JSON.stringify({access_token: data.token}), {headers: headers});
            // .subscribe(result => {
            //     let data = result.json();
            //     if (data && data.token) {
            //         localStorage.setItem('token', data.token);
            //     }
            // });
    }

    loginFacebook(data: any) {
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.authUrl + '/facebook', JSON.stringify({access_token: data.token}), {headers: headers});
            // .subscribe(result => {
            //     let data = result.json();
            //     if (data && data.token) {
            //         localStorage.setItem('token', data.token);
            //     }
            // });
    }

    confirmEmail(token: string) {
        return this.http.post(this.authUrl + '/register/confirm', JSON.stringify({token: token}), this.getHeaders());
    }

    remindPassword(email: string) {
        var changeUrl = this.router.createUrlTree(['auth', 'change-password']).toString();
        return this.http.post(this.authUrl + '/reset-password', JSON.stringify({
            email: email,
            changeUrl: changeUrl
        }), this.getHeaders());
    }

    validateToken(token: string) {
        return this.http.post(this.authUrl + '/reset-password/validate-token', JSON.stringify({token: token}), this.getHeaders());
    }

    resetPassword(token: string, password: string) {
        return this.http.post(this.authUrl + '/reset-password/change-password', JSON.stringify({
            token: token,
            password: password
        }), this.getHeaders());
    }

    logout() {
        localStorage.removeItem('token');
        this.profileService.clearProfile();
        this.router.navigate(['auth', 'signin']);
    }

    register(data: any) {
        data.confirmUrl = this.router.createUrlTree(['auth', 'confirm-email']).toString();
        return this.http.post(this.authUrl + '/register', JSON.stringify(data), this.getHeaders());
    }
}