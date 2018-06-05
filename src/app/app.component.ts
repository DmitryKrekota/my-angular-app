import {Component} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import { AuthService } from './common/auth/auth.service';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    async onRouterEvent(event) {
        if (event instanceof NavigationStart) {
            let user = await this.authService.getAuthenticatedUser();
            let loginUrl = '/login';
            let isLoginUrl = event.url === loginUrl;
            if (!isLoginUrl && !user) {
                this.router.navigate([loginUrl]);
            }
            if (isLoginUrl && user) {
                this.router.navigate(['/']);
            }
        }
    }

    constructor(private authService: AuthService, private router: Router) {
        router.events.subscribe(this.onRouterEvent.bind(this));
    }
}
