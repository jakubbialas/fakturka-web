import {RouterModule, Routes} from "@angular/router";

import {DashboardComponent} from "./dashboard";
import {InvoicesComponent} from "./invoices";
import {ProductsComponent} from "./products";
import {CustomersComponent} from "./customers";
import {SettingsComponent} from "./settings";
import {LoginComponent} from "./login";
import {AuthGuard} from "./shared/guards";

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'invoices', component: InvoicesComponent, canActivate: [AuthGuard]},
    {path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
    {path: 'customers', component: CustomersComponent, canActivate: [AuthGuard]},
    {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(routes);
