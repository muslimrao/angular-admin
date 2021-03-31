"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsCreateComponent = void 0;
var core_1 = require("@angular/core");
var ProductsCreateComponent = /** @class */ (function () {
    function ProductsCreateComponent() {
        this.selectAdvanceMore = false;
    }
    ProductsCreateComponent.prototype.ngOnInit = function () { };
    ProductsCreateComponent.prototype.toggleAdvanceMore = function () {
        console.log('fafa');
        this.selectAdvanceMore = !this.selectAdvanceMore;
    };
    ProductsCreateComponent = __decorate([
        core_1.Component({
            selector: 'sb-products-create',
            templateUrl: './products-create.component.html',
            styleUrls: ['./products-create.component.scss']
        })
    ], ProductsCreateComponent);
    return ProductsCreateComponent;
}());
exports.ProductsCreateComponent = ProductsCreateComponent;
