import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from '../common/navbar/navbar.component';
import {DragElementDirective} from '../common/drag-element/drag-element.directive';

@NgModule({
    declarations: [DashboardComponent, NavbarComponent, DragElementDirective],
    imports: [BrowserModule],
    providers: [],
    bootstrap: []
})
export class DashboardModule {}
