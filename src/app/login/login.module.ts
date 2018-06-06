import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [BrowserModule, FormsModule, SharedModule],
    providers: [],
    bootstrap: [LoginComponent]
})
export class LoginModule {}
