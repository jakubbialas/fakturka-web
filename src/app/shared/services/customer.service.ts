import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';

import {Customer} from '../models';

@Injectable()
export class CustomerService {
    private baseUrl = 'http://localhost:8080/api/customers';

    constructor(private http: AuthHttp) {
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
