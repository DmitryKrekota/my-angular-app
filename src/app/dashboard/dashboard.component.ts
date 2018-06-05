import {Component} from '@angular/core';
import {AuthService} from '../common/auth/auth.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    user;

    async obtainUser() {
        this.user = await this.authService.getAuthenticatedUser();
    }

    constructor(private authService: AuthService, private domSanitizer: DomSanitizer) {
        this.obtainUser();
    }
}
