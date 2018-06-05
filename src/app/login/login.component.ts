import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../common/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username: string;
    password: string;

    constructor(private authService: AuthService, private router: Router) {}

    async login() {
        try {
            await this.authService.login(this.username, this.password);
            this.router.navigate(['/']);
        } catch {
            alert('Incorrect credentials. Try again.');
        }
    }
}
