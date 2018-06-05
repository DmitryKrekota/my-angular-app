import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from '../common/navbar/navbar.component';

@NgModule({
    declarations: [DashboardComponent, NavbarComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: []
})
export class DashboardModule {}
