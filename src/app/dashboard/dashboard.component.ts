import {Component} from '@angular/core';
import {AuthService} from '../common/auth/auth.service';
import {DomSanitizer} from '@angular/platform-browser';
import {DragElementService} from '../common/drag-element/drag-element.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    user;
    savedPositions;

    async obtainUser() {
        return (this.user = await this.authService.getAuthenticatedUser());
    }

    onElementDragged(item) {
        this.savedPositions[this.user.username] = this.savedPositions[this.user.username] || {};
        this.savedPositions[this.user.username] = Object.assign(this.savedPositions[this.user.username], item);
        localStorage.setItem('savedPositions', JSON.stringify(this.savedPositions));
    }

    constructor(
        private authService: AuthService,
        private domSanitizer: DomSanitizer,
        private dragElementService: DragElementService
    ) {
        this.obtainUser().then(() => {
            let localStorageItem = localStorage.getItem('savedPositions');
            if (localStorageItem) {
                this.savedPositions = JSON.parse(localStorageItem);
                if (this.savedPositions[this.user.username]) {
                    Object.keys(this.savedPositions[this.user.username]).forEach((key, index) => {
                        // console.log(`(key,index)`, key, this.savedPositions[this.user.username][key]);
                        // key: the name of the object key
                        // index: the ordinal position of the key within the object
                        this.dragElementService.elementInitPositions$.emit({
                            [key]: this.savedPositions[this.user.username][key]
                        });
                    });
                    // console.log(`this.savedPositions[this.user.username]`, this.savedPositions[this.user.username]);
                }
            } else {
                this.savedPositions = {};
            }
        });
        this.dragElementService.elementDragged$.subscribe(this.onElementDragged.bind(this));
    }
}
