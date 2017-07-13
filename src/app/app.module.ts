import {ApplicationRef, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Http, HttpModule, RequestOptions} from "@angular/http";
import {FormsModule} from "@angular/forms";

import {AuthConfig, AuthHttp} from "angular2-jwt";
import {Angular2SocialLoginModule} from "angular2-social-login";
import {createNewHosts, removeNgStyles} from "@angularclass/hmr";

import {MdButtonModule, MdIconModule, MdListModule, MdSidenavModule, MdToolbarModule} from "@angular/material";

import {AppComponent} from "./app.component";
import {AuthGuard} from "./shared/guards";
import {routing} from "./app.routing";
import {LoginComponent} from "./login";
import {MenuComponent} from "./menu";
import {TopbarComponent} from "./topbar";
import {DashboardComponent} from "./dashboard";
import {InvoicesComponent} from "./invoices";
import {ProductsComponent} from "./products";
import {CustomersComponent} from "./customers";
import {SettingsComponent} from "./settings";
import {ProductService, CustomerService, InvoiceService, SettingService, AuthorizationService} from './shared/services';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

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
        LoginComponent,
        MenuComponent,
        TopbarComponent,
        InvoicesComponent,
        ProductsComponent,
        CustomersComponent,
        SettingsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        Angular2SocialLoginModule,
        routing,
        MdSidenavModule,
        MdIconModule,
        MdListModule,
        MdToolbarModule,
        MdButtonModule
    ],
    providers: [
        AuthGuard,
        AuthorizationService,
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        },
        ProductService,
        CustomerService,
        InvoiceService,
        SettingService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
    constructor(public appRef: ApplicationRef) {
    }

    hmrOnInit(store) {
        console.log('HMR store', store);
    }

    hmrOnDestroy(store) {
        const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}

const providers = {
    'google': {
        'clientId': '992826694735-9ijo8p667ffi95k5dcs4o6p3828und77.apps.googleusercontent.com'
    },
//    "linkedin": {
//      "clientId": "LINKEDIN_CLIENT_ID"
//    },
    'facebook': {
        'clientId': '339913873095594',
        'apiVersion': 'v2.9' // like v2.4
    }
};

Angular2SocialLoginModule.loadProvidersScripts(providers);
