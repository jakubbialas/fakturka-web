import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";

@Injectable()
export class AuthorizationService {
    private authUrl = 'http://localhost:8080/auth';

    constructor(private http: Http) {
    }

    login(username: string, password: string) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.authUrl + '/login', JSON.stringify({
            username: username,
            password: password
        }), options)
            .subscribe(result => {
                let data = result.json();
                if (data && data.token) {
                    localStorage.setItem('token', data.token);
                }
            });
    }

    loginGoogle(data: any) {
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.authUrl + '/google', JSON.stringify({access_token: data.token}), {headers: headers})
            .subscribe(result => {
                let data = result.json();
                if (data && data.token) {
                    localStorage.setItem('token', data.token);
                }
            });
    }

    loginFacebook(data: any) {
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.authUrl + '/facebook', JSON.stringify({access_token: data.token}), {headers: headers})
            .subscribe(result => {
                let data = result.json();
                if (data && data.token) {
                    localStorage.setItem('token', data.token);
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
    }
}