import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
class AuthService {
    users: Array<User>;

    constructor() {
        this.users = [
            {
                username: 'root',
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

    login(username: string, password: string) {
        return new Promise((resolve, reject) => {
            let loginUser = this.users.find((user) => {
                return user.username === username && user.password === password;
            });
            if (loginUser) {
                window.localStorage.setItem('authenticatedUsername', loginUser.username);
                resolve();
            } else {
                reject();
            }
        });
    }

    logout() {
        return new Promise((resolve, reject) => {
            window.localStorage.removeItem('authenticatedUsername');
            resolve();
        });
    }
}

export {AuthService};
