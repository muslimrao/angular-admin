import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sb-table-heading',
    templateUrl: './table-heading.component.html',
    styleUrls: ['./table-heading.component.scss'],
})
export class TableHeadingComponent implements OnInit {
    @Input() title!: string;
    @Input() hideBreadcrumbs = false;

    constructor() {}

    ngOnInit(): void {}
}
