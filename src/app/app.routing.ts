import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';

export let AppRouting = [
    {path: '', component: DashboardComponent},
    {path: 'login', component: LoginComponent}
];
