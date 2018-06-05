import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';

@NgModule({
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: []
})
export class CommonModule {}
