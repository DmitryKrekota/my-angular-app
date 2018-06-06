import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {AuthService} from '../shared/services/auth.service';
import {DragElementService} from '../shared/services/drag-element.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    user;
    savedPositions;

    constructor(
        private authService: AuthService,
        private domSanitizer: DomSanitizer,
        private dragElementService: DragElementService
    ) {}

    ngOnInit() {
        this.obtainUser().subscribe(this.onObtainUser.bind(this));
        this.dragElementService.elementDragged$.subscribe(this.onElementDragged.bind(this));
    }

    onObtainUser() {
        let localStorageItem = localStorage.getItem('savedPositions');
        if (localStorageItem) {
            this.savedPositions = JSON.parse(localStorageItem);
            if (this.savedPositions[this.user.username]) {
                Object.keys(this.savedPositions[this.user.username]).forEach((key) => {
                    this.dragElementService.elementInitPositions$.emit({
                        [key]: this.savedPositions[this.user.username][key]
                    });
                });
            }
        } else {
            this.savedPositions = {};
        }
    }

    obtainUser() {
        let userObserver = this.authService.getAuthenticatedUser();
        userObserver.subscribe((user) => {
            this.user = user;
        });
        return userObserver;
    }

    onElementDragged(item) {
        this.savedPositions[this.user.username] = this.savedPositions[this.user.username] || {};
        this.savedPositions[this.user.username] = Object.assign(this.savedPositions[this.user.username], item);
        localStorage.setItem('savedPositions', JSON.stringify(this.savedPositions));
    }

    trustUrl(url) {
        return this.domSanitizer.bypassSecurityTrustUrl(url);
    }
}
