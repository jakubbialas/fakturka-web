import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { environment } from '../../../environments/environment';

import { Product } from '../models';

@Injectable()
export class ProductService {
    private baseUrl;

    constructor(private http: AuthHttp) {
        this.baseUrl = environment.api.url + '/api/products';
    }

    getProducts() {
        return this.http.get(this.baseUrl)
            .map(response => {
                let products = [];
                for (let item of response.json()) {
                    products.push(new Product(item));
                }
                return products;
            })
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
