import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sb-inline',
    templateUrl: './inline.component.html',
    styleUrls: ['./inline.component.scss'],
})
export class InlineComponent implements OnInit {
    @Input() type: string | undefined;
    @Input() heading: string | undefined;
    @Input() message: string | undefined;

    constructor() {}

    ngOnInit(): void {}
}
