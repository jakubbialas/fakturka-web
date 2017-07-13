import {Customer, BankAccount, InvoicePosition} from '.';
import * as moment from 'moment';

export class Invoice {
    id: string;
    number: string;
    customer: Customer;
    seller: Customer;
    invoiceDate: moment.Moment;
    invoicePlace: string;
    paymentDate: moment.Moment;
    paymentMethod: string;
    bankAccount: BankAccount;
    saleDate: moment.Moment;
    notes: string;
    price: number;
    tax: number;
    totalPrice: number;
    totalPriceText: string;
    positions: Array<InvoicePosition>;

    constructor(data: any) {
        this.id = data._id;
        this.number = data.number;
        this.customer = new Customer(data.customer);
        this.seller = new Customer(data.seller);
        this.invoiceDate = moment(data.invoiceDate);
        this.invoicePlace = data.invoicePlace;
        this.paymentDate = moment(data.paymentDate);
        this.paymentMethod = data.paymentMethod;
        this.bankAccount = new BankAccount(data.bankAccount);
        this.saleDate = moment(data.saleDate);
        this.notes = data.notes;
        this.price = data.price;
        this.tax = data.tax;
        this.totalPrice = data.totalPrice;
        this.totalPriceText = data.totalPriceText;
        this.positions = data.positions.map(posData => {
            return new InvoicePosition(posData);
        });
    }
}
