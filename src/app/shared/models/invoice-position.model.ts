import {Product} from '.';

export class InvoicePosition extends Product {
    quantity: number;
    price: number;
    tax: number;
    priceTotal: number;

    constructor(data: any) {
        super(data);
        this.quantity = data.quantity;
        this.price = data.price;
        this.tax = data.tax;
        this.priceTotal = data.priceTotal;
    }
}
