import {NgModule} from '@angular/core';
import {DragElementDirective} from './directives/drag-element.directive';
import {AuthService} from './services/auth.service';
import {DragElementService} from './services/drag-element.service';

@NgModule({
    imports: [],
    declarations: [DragElementDirective],
    exports: [DragElementDirective],
    providers: [AuthService, DragElementService]
})
export class SharedModule {}
