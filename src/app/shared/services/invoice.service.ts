import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';

import {Invoice} from '../models';

@Injectable()
export class InvoiceService {
    private baseUrl = 'http://localhost:8080/api/invoices';

    constructor(private http: AuthHttp) {
    }

    getInvoices() {
        return this.http.get(this.baseUrl)
            .map(response => {
                const invoices = [];
                for (const item of response.json()) {
                    invoices.push(new Invoice(item));
                }
                return invoices;
            })
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
