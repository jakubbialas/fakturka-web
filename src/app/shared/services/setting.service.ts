import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';

import {Setting} from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class SettingService {
    private baseUrl;

    constructor(private http: AuthHttp) {
        this.baseUrl = environment.api.url + '/api/settings';
    }

    getSettings() {
        return this.http.get(this.baseUrl)
            .map(response => {
                let settings = [];
                for (let item of response.json()) {
                    settings.push(new Setting(item));
                }
                return settings;
            })
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
