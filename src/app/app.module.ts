import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";

import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { Angular2SocialLoginModule } from 'angular2-social-login';

import { routing } from './app.routing';
import { AuthenticationService } from './shared/services';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginModule } from './login/login.module';
import { AppModule as InnerAppModule } from './app/app.module';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        tokenName: 'token',
        headerPrefix: 'JWT'
    }), http, options);
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        InnerAppModule,
        LoginModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        Angular2SocialLoginModule,
        routing,
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
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
