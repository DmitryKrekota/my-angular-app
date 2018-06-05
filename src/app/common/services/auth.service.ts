import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
class AuthService {
    users: Array<User>;

    constructor() {
        this.users = [{
            username: 'Admin',
            password: '111111'
        }];
    }

    isAuthorized () {
        return false;
    }
}

export {AuthService};
