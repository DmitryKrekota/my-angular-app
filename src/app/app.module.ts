import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AppRouting} from './app.routing';
import {DashboardModule} from './dashboard/dashboard.module';
import {LoginModule} from './login/login.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        DashboardModule,
        LoginModule,
        BrowserModule,
        RouterModule.forRoot(AppRouting, {
            useHash: true
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
