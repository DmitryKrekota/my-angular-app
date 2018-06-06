import {Component} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {AuthService} from './shared/services/auth.service';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    constructor(private authService: AuthService, private router: Router) {
        router.events.subscribe(this.onRouterEvent.bind(this));
    }

    onRouterEvent(event) {
        if (event instanceof NavigationStart) {
            this.authService.getAuthenticatedUser().subscribe((user) => {
                let loginUrl = '/login';
                let isLoginUrl = event.url === loginUrl;
                if (!isLoginUrl && !user) {
                    this.router.navigate([loginUrl]);
                }
                if (isLoginUrl && user) {
                    this.router.navigate(['/']);
                }
            });
        }
    }
}
