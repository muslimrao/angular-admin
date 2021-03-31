import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import { CustomersCreateComponent } from './customers/components/create/customers-create.component';
import { CustomersViewComponent } from './customers/components/view/customers-view.component';
import { PriceCreateComponent } from './price/components/create/price-create.component';
import { ProductsCreateComponent } from './products/components/create/products-create.component';
import { SalesModule } from './sales.module';

/* Module */

/* Routes */
export const ROUTES: Routes = [
    /*
    {
        path: '',
        canActivate: [],
        component: CustomersCreateComponent,
        data: {
            title: 'Customers - EASERP',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/sales/customers',
                },
                {
                    text: 'Customers',
                    active: true,
                },
            ],
        } as SBRouteData,
    },*/
    {
        path: 'customers',
        canActivate: [],
        component: CustomersCreateComponent,
        data: {
            title: 'Customers',
        } as SBRouteData,
    },

    {
        path: 'price',
        canActivate: [],
        component: PriceCreateComponent,
        data: {
            title: 'Price',
        } as SBRouteData,
    },

    {
        path: 'products',
        canActivate: [],
        component: ProductsCreateComponent,
        data: {
            title: 'Products & Services',
        } as SBRouteData,
    },
];

@NgModule({
    declarations: [],
    imports: [SalesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class SalesRoutingModule {}
