import {Component, OnInit} from '@angular/core';
import {InvoiceService} from '../shared/services';
import {Invoice} from '../shared/models';

@Component({
    selector: 'app-invoices',
    templateUrl: './invoices.component.html',
    styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

    protected invoices: Array<Invoice>;

    constructor(private invoiceService: InvoiceService) {
    }

    ngOnInit() {
        this.loadInvoices();
    }

    loadInvoices() {
        this.invoiceService.getInvoices().then(invoices => {
            this.invoices = invoices;
        })
    }
}
