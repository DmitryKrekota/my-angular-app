import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class DragElementService {
    public elementDragged$: EventEmitter<any>;
    public elementInitPositions$: EventEmitter<any>;

    constructor() {
        this.elementDragged$ = new EventEmitter();
        this.elementInitPositions$ = new EventEmitter();
    }
}
