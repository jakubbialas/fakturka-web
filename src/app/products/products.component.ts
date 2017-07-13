import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/services';
import {Product} from '../shared/models';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    protected products: Array<Product>;

    constructor(private productService: ProductService) {
    }

    ngOnInit() {
        this.loadProducts();
    }

    loadProducts() {
        this.productService.getProducts().then(products => {
            this.products = products;
        })
    }

}
