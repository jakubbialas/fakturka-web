import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    private links;

    constructor() {
    }

    ngOnInit() {
        this.links = [];

        this.links.push({
            name: 'Dashboard',
            href: '/dashboard',
            icon: 'home'
        });
        this.links.push({
            name: 'Invoices',
            href: '/invoices',
            icon: 'receipt'
        });
        this.links.push({
            name: 'Customers',
            href: '/customers',
            icon: 'contacts'
        });
        this.links.push({
            name: 'Products',
            href: '/products',
            icon: 'folder'
        });
        this.links.push({
            name: 'Settings',
            href: '/settings',
            icon: 'settings'
        });
    }

}
