import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';

import {Setting} from '../models';

@Injectable()
export class SettingService {
    private baseUrl = 'http://localhost:8080/api/settings';

    constructor(private http: AuthHttp) {
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
