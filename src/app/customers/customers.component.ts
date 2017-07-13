import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../shared/services';
import {Customer} from '../shared/models';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

    private customers: Array<Customer>;

    constructor(private customerService: CustomerService) {
    }

    ngOnInit() {
        this.loadCustomers();
    }

    loadCustomers() {
        this.customerService.getCustomers().then(customers => {
            this.customers = customers;
        })
    }
}
