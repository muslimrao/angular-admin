"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SideNavItemComponent = void 0;
var core_1 = require("@angular/core");
var SideNavItemComponent = /** @class */ (function () {
    function SideNavItemComponent() {
        this.expanded = false;
    }
    SideNavItemComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input()
    ], SideNavItemComponent.prototype, "sideNavItem");
    __decorate([
        core_1.Input()
    ], SideNavItemComponent.prototype, "isActive");
    __decorate([
        core_1.Input()
    ], SideNavItemComponent.prototype, "rootClass");
    SideNavItemComponent = __decorate([
        core_1.Component({
            selector: 'sb-side-nav-item',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            templateUrl: './side-nav-item.component.html',
            styleUrls: ['side-nav-item.component.scss']
        })
    ], SideNavItemComponent);
    return SideNavItemComponent;
}());
exports.SideNavItemComponent = SideNavItemComponent;
