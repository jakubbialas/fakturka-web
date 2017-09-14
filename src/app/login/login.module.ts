import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextEqualityValidatorModule } from 'ngx-text-equality-validator';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

import {
    MdButtonModule, MdCardModule, MdInputModule, MdProgressSpinnerModule,
    MdSnackBarModule
} from '@angular/material';
import { Angular2SocialLoginModule } from 'angular2-social-login';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TextEqualityValidatorModule,
        FlashMessagesModule,
        RouterModule,
        MdButtonModule,
        MdInputModule,
        MdSnackBarModule,
        MdCardModule,
        MdProgressSpinnerModule
    ],
    declarations: [
        SigninComponent,
        SignupComponent,
        ConfirmEmailComponent,
        ForgotPasswordComponent,
        ChangePasswordComponent,
        LoginComponent,
    ],
    exports: [
        SigninComponent,
        SignupComponent,
    ]
})
export class LoginModule {
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
