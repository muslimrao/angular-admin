"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LayoutAuthComponent = void 0;
var core_1 = require("@angular/core");
var LayoutAuthComponent = /** @class */ (function () {
    function LayoutAuthComponent() {
    }
    LayoutAuthComponent.prototype.ngOnInit = function () { };
    LayoutAuthComponent = __decorate([
        core_1.Component({
            selector: 'sb-layout-auth',
            templateUrl: './layout-auth.component.html',
            styleUrls: ['layout-auth.component.scss']
        })
    ], LayoutAuthComponent);
    return LayoutAuthComponent;
}());
exports.LayoutAuthComponent = LayoutAuthComponent;
