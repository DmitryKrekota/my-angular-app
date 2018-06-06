import {Directive, HostListener, ElementRef} from '@angular/core';
import {DragElementService} from '../services/drag-element.service';

@Directive({
    selector: '[appDragElement]'
})
export class DragElementDirective {
    initialPageX: number;
    initialPageY: number;
    initialElementX: number;
    initialElementY: number;
    body: HTMLElement;
    element: HTMLElement;
    entity: string;

    constructor(private elementRef: ElementRef, private dragElementService: DragElementService) {
        this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
        this.onDocumentMouseUp = this.onDocumentMouseUp.bind(this);
        this.element = this.elementRef.nativeElement;
        this.entity = this.element.getAttribute('appDragElement');
        this.dragElementService.elementInitPositions$.subscribe(this.onElementInitPositions.bind(this));
    }

    onElementInitPositions(item) {
        if (item[this.entity]) {
            this.element.style.top = item[this.entity].top;
            this.element.style.left = item[this.entity].left;
            this.element.style.position = 'fixed';
        }
    }

    onDocumentMouseMove($event) {
        $event.preventDefault();
        this.element.style.top = this.initialElementY + ($event.pageY - this.initialPageY) + 'px';
        this.element.style.left = this.initialElementX + ($event.pageX - this.initialPageX) + 'px';
        this.element.style.position = 'fixed';
    }

    onDocumentMouseUp($event) {
        $event.preventDefault();
        document.removeEventListener('mousemove', this.onDocumentMouseMove);
        document.removeEventListener('mouseup', this.onDocumentMouseUp);
        this.dragElementService.elementDragged$.emit({
            [this.entity]: {
                top: this.element.style.top,
                left: this.element.style.left
            }
        });
    }

    @HostListener('mousedown', ['$event'])
    toggleOpen($event: any) {
        $event.preventDefault();
        this.initialPageX = $event.pageX;
        this.initialPageY = $event.pageY;
        let elementRect = this.element.getBoundingClientRect();
        this.initialElementX = elementRect.left;
        this.initialElementY = elementRect.top;
        document.addEventListener('mousemove', this.onDocumentMouseMove);
        document.addEventListener('mouseup', this.onDocumentMouseUp);
    }
}
