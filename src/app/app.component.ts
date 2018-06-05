import {Component} from '@angular/core';
import {AuthService} from './common/services/auth.service';
import {Router, NavigationStart} from '@angular/router';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {

    onRouterEvent(event) {
        if (event instanceof NavigationStart) {
            let loginUrl = '/login';
            let isAuthorized = this.authService.isAuthorized();
            let isLoginUrl = event.url === loginUrl;
            if (!isLoginUrl && !isAuthorized) {
                this.router.navigate([loginUrl]);
            }
            if (isLoginUrl && isAuthorized) {
                this.router.navigate(['/']);
            }
        }
    }

    constructor(private authService: AuthService, private router: Router) {
        router.events.subscribe(this.onRouterEvent.bind(this));
    }
}
