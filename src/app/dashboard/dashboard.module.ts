import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {NavbarModule} from '../navbar/navbar.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [BrowserModule, NavbarModule, SharedModule],
    providers: [],
    bootstrap: []
})
export class DashboardModule {}
