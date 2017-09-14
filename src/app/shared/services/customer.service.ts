import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import { environment } from '../../../environments/environment';

import {Customer} from '../models';

@Injectable()
export class CustomerService {
    private baseUrl;

    constructor(private http: AuthHttp) {
        this.baseUrl = environment.api.url + '/api/customers';
    }

    getCustomers() {
        return this.http.get(this.baseUrl)
            .map(response => {
                let customers = [];
                for (let item of response.json()) {
                    customers.push(new Customer(item));
                }
                return customers;
            })
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
