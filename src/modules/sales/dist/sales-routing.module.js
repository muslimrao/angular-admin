"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SalesRoutingModule = exports.ROUTES = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var customers_create_component_1 = require("./customers/components/create/customers-create.component");
var price_create_component_1 = require("./price/components/create/price-create.component");
var products_create_component_1 = require("./products/components/create/products-create.component");
var sales_module_1 = require("./sales.module");
/* Module */
/* Routes */
exports.ROUTES = [
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
        component: customers_create_component_1.CustomersCreateComponent,
        data: {
            title: 'Customers'
        }
    },
    {
        path: 'price',
        canActivate: [],
        component: price_create_component_1.PriceCreateComponent,
        data: {
            title: 'Price'
        }
    },
    {
        path: 'products',
        canActivate: [],
        component: products_create_component_1.ProductsCreateComponent,
        data: {
            title: 'Products & Services'
        }
    },
];
var SalesRoutingModule = /** @class */ (function () {
    function SalesRoutingModule() {
    }
    SalesRoutingModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [sales_module_1.SalesModule, router_1.RouterModule.forChild(exports.ROUTES)],
            exports: [router_1.RouterModule]
        })
    ], SalesRoutingModule);
    return SalesRoutingModule;
}());
exports.SalesRoutingModule = SalesRoutingModule;
