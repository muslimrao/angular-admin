import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InlineComponent } from './inline/inline.component';

/* Third Party */

@NgModule({
    declarations: [InlineComponent],
    imports: [CommonModule, NgbModule],
    exports: [InlineComponent],
})
export class ShowMessagesModule {}
