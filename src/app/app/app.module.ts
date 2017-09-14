import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AuthConfig, AuthHttp } from 'angular2-jwt';
import {
    MdButtonModule, MdIconModule, MdListModule, MdSidenavModule, MdToolbarModule, MdInputModule,
    MdSnackBarModule, MdCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu';
import { TopbarComponent } from './topbar';
import { DashboardComponent } from './dashboard';
import { InvoicesComponent } from './invoices';
import { ProductsComponent } from './products';
import { CustomersComponent } from './customers';
import { SettingsComponent } from './settings';
import { AuthGuard } from '../shared/guards';
import {
    AuthenticationService,
    CustomerService,
    InvoiceService,
    ProductService,
    SettingService,
    ProfileService
} from '../shared/services';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { TextEqualityValidatorModule } from 'ngx-text-equality-validator';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        tokenName: 'token',
        headerPrefix: 'JWT'
    }), http, options);
}

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        MenuComponent,
        TopbarComponent,
        InvoicesComponent,
        ProductsComponent,
        CustomersComponent,
        SettingsComponent
    ],
    imports: [
        RouterModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        TextEqualityValidatorModule,
        FlashMessagesModule,
        MdSidenavModule,
        MdIconModule,
        MdListModule,
        MdToolbarModule,
        MdButtonModule,
        MdInputModule,
        MdSnackBarModule,
        MdCardModule
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        },
        ProductService,
        CustomerService,
        InvoiceService,
        SettingService,
        ProfileService
    ]
})
export class AppModule {
}

