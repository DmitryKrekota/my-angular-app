import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
class AuthService {
    users: Array<User>;

    constructor() {
        this.users = [
            {
                username: 'Admin',
                password: '111111'
            }
        ];
    }

    isAuthenticated() {
        return new Promise((resolve) => {
            let authenticatedUsername = window.localStorage.getItem('authenticatedUsername');
            resolve(
                this.users.some((user) => {
                    return user.username === authenticatedUsername;
                })
            );
        });
    }
}

export {AuthService};
