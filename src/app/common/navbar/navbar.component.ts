import {Component} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    constructor(private authService: AuthService, private router: Router) {}

    async logout($event) {
        $event.preventDefault();
        try {
            await this.authService.logout();
            this.router.navigate(['/login']);
        } catch {
            alert('Incorrect credentials. Try again.');
        }
    }

}
