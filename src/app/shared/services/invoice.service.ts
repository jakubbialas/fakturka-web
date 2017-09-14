import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import { environment } from '../../../environments/environment';

import {Invoice} from '../models';

@Injectable()
export class InvoiceService {
    private baseUrl;

    constructor(private http: AuthHttp) {
        this.baseUrl = environment.api.url + '/api/invoices';
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
