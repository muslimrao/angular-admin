"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SalesModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_common_module_1 = require("@common/app-common.module");
var navigation_module_1 = require("@modules/navigation/navigation.module");
var utility_module_1 = require("../utility/utility.module");
var customers_create_component_1 = require("./customers/components/create/customers-create.component");
var customers_view_component_1 = require("./customers/components/view/customers-view.component");
var price_create_component_1 = require("./price/components/create/price-create.component");
var price_view_component_1 = require("./price/components/view/price-view.component");
var products_create_component_1 = require("./products/components/create/products-create.component");
var products_view_component_1 = require("./products/components/view/products-view.component");
// import { CustomersComponent } from './customers/components/customers.component';
/* Customer Components */
var SalesModule = /** @class */ (function () {
    function SalesModule() {
    }
    SalesModule = __decorate([
        core_1.NgModule({
            declarations: [
                customers_create_component_1.CustomersCreateComponent,
                customers_view_component_1.CustomersViewComponent,
                price_create_component_1.PriceCreateComponent,
                price_view_component_1.PriceViewComponent,
                products_view_component_1.ProductsViewComponent,
                products_create_component_1.ProductsCreateComponent,
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                app_common_module_1.AppCommonModule,
                navigation_module_1.NavigationModule,
                utility_module_1.UtilityModule,
            ],
            exports: []
        })
    ], SalesModule);
    return SalesModule;
}());
exports.SalesModule = SalesModule;
