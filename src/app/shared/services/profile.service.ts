import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { User } from '../models/user.model';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {

    private profileUrl;
    private profile: BehaviorSubject<User>;

    private settingsUrl;
    private settings: BehaviorSubject<any>;

    constructor(
        private http: AuthHttp
    ) {
        this.profileUrl = environment.api.url + '/api/profile';
        this.profile = <BehaviorSubject<User>> new BehaviorSubject(new User());
        this.settingsUrl = environment.api.url + '/api/profile/settings';
        this.settings = <BehaviorSubject<any>> new BehaviorSubject({});
        this.refreshProfile();
        this.refreshSettings();
    }

    getProfile(): Observable<User> {
        return this.profile.asObservable();
    }

    getSettings(): Observable<any> {
        return this.settings.asObservable();
    }

    clearProfile() {
        this.profile.next(new User());
        this.settings.next({});
    }

    refreshProfile() {
        var me = this;
        this.profile.next(new User());
        const url = `${this.profileUrl}`;

        this.http.get(url)
            .map(response => response.json() as User)
            .subscribe(profile => {
                me.profile.next(profile);
            }, () => {
                me.profile.next(new User());
            });

        this.refreshSettings(); // if refreshing profile, have to refresh settings as well
    }

    refreshSettings() {
        var me = this;
        this.settings.next({});
        const url = `${this.settingsUrl}`;

        this.http.get(url)
            .map(response => response.json())
            .subscribe(settings => {
                me.settings.next(settings);
            }, () => {
                me.settings.next({});
            });
    }

    setSetting(key: string, value: any): Promise<any> {
        const me = this;
        const url = `${this.settingsUrl}/${key}`;

        return this.http.put(url, {value: value}).toPromise().then(function() {
            me.refreshSettings();
        });
    }
}
