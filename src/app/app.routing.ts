import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app/app.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { ConfirmEmailComponent } from './login/confirm-email/confirm-email.component';
import { ForgotPasswordComponent } from "app/login";
import { ChangePasswordComponent } from './login/change-password/change-password.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { InvoicesComponent } from './app/invoices/invoices.component';
import { ProductsComponent } from "app/app/products";
import { CustomersComponent } from './app/customers/customers.component';
import { SettingsComponent } from './app/settings/settings.component';


const routes: Routes = [
    {path: 'auth', component: LoginComponent, children: [
        {path: 'signin', component: SigninComponent},
        {path: 'signup', component: SignupComponent},
        {path: 'confirm-email', component: ConfirmEmailComponent},
        {path: 'forgot-password', component: ForgotPasswordComponent},
        {path: 'change-password', component: ChangePasswordComponent},
        {path: '', redirectTo: '/auth/signin', pathMatch: 'full'},
    ]},
    {path: '', component: AppComponent, children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'invoices', component: InvoicesComponent},
        {path: 'products', component: ProductsComponent},
        {path: 'customers', component: CustomersComponent},
        {path: 'settings', component: SettingsComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]} //, canActivate: [AuthGuard]},
];

export const routing = RouterModule.forRoot(routes);
