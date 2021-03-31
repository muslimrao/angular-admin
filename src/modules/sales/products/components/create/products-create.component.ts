import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-products-create',
    templateUrl: './products-create.component.html',
    styleUrls: ['./products-create.component.scss'],
})
export class ProductsCreateComponent implements OnInit {
    selectAdvanceMore = false;
    constructor() {}

    ngOnInit(): void {}

    toggleAdvanceMore() {
        console.log('fafa');
        this.selectAdvanceMore = !this.selectAdvanceMore;
    }
}
