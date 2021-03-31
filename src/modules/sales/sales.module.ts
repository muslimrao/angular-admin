import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import { UtilityModule } from '../utility/utility.module';

import { CustomersCreateComponent } from './customers/components/create/customers-create.component';
import { CustomersViewComponent } from './customers/components/view/customers-view.component';
import { PriceCreateComponent } from './price/components/create/price-create.component';
import { PriceViewComponent } from './price/components/view/price-view.component';
import { ProductsCreateComponent } from './products/components/create/products-create.component';
import { ProductsViewComponent } from './products/components/view/products-view.component';

// import { CustomersComponent } from './customers/components/customers.component';

/* Customer Components */

@NgModule({
    declarations: [
        CustomersCreateComponent,
        CustomersViewComponent,
        PriceCreateComponent,
        PriceViewComponent,
        ProductsViewComponent,
        ProductsCreateComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        UtilityModule,
    ],
    exports: [],
})
export class SalesModule {}
