import {Directive, HostListener, ElementRef} from '@angular/core';

@Directive({
    selector: '[appDragElement]'
})
export class DragElementDirective {
    initialPageX: number;
    initialPageY: number;
    initialElementX: number;
    initialElementY: number;
    body: HTMLElement;

    constructor(private elementRef: ElementRef) {
        this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
        this.onDocumentMouseUp = this.onDocumentMouseUp.bind(this);
    }

    onDocumentMouseMove($event) {
        $event.preventDefault();
        this.elementRef.nativeElement.style.top = (this.initialElementY + ($event.pageY - this.initialPageY)) + 'px';
        this.elementRef.nativeElement.style.left = (this.initialElementX + ($event.pageX - this.initialPageX)) + 'px';
        this.elementRef.nativeElement.style.position = 'fixed';
    }

    onDocumentMouseUp($event) {
        $event.preventDefault();
        document.removeEventListener('mousemove', this.onDocumentMouseMove);
        document.removeEventListener('mouseup', this.onDocumentMouseUp);
    }

    @HostListener('mousedown', ['$event'])
    toggleOpen($event: any) {
        $event.preventDefault();
        this.initialPageX = $event.pageX;
        this.initialPageY = $event.pageY;
        let elementRect = this.elementRef.nativeElement.getBoundingClientRect();
        this.initialElementX = elementRect.x;
        this.initialElementY = elementRect.y;
        document.addEventListener('mousemove', this.onDocumentMouseMove);
        document.addEventListener('mouseup', this.onDocumentMouseUp);
    }
}
