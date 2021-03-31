import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-customers-create',
    templateUrl: './customers-create.component.html',
    styleUrls: ['./customers-create.component.scss'],
})
export class CustomersCreateComponent implements OnInit {
    selectDeliveryOption:Boolean = false;
    selectTab:Boolean = true;

    constructor() {}

    ngOnInit(): void {}

    toggleDeliveryAddress(state: Boolean) {
        this.selectDeliveryOption = state;
        console.log(state);
    }

    toggleTabs(tabNumber: Boolean) {
        this.selectTab = tabNumber;
    }
}
