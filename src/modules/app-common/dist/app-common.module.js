"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.AppCommonModule = void 0;
/* tslint:disable: ordered-imports*/
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
/* Third Party */
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var icons_module_1 = require("@modules/icons/icons.module");
var thirdParty = [icons_module_1.IconsModule, ng_bootstrap_1.NgbModule];
/* Containers */
var appCommonContainers = require("./containers");
/* Components */
var appCommonComponents = require("./components");
/* Guards */
var appCommonGuards = require("./guards");
/* Services */
var appCommonServices = require("./services");
var authServices = require("@modules/auth/services");
var AppCommonModule = /** @class */ (function () {
    function AppCommonModule() {
    }
    AppCommonModule = __decorate([
        core_1.NgModule({
            imports: __spreadArrays([common_1.CommonModule, router_1.RouterModule], thirdParty),
            providers: __spreadArrays(appCommonServices.services, authServices.services, appCommonGuards.guards),
            declarations: __spreadArrays(appCommonContainers.containers, appCommonComponents.components),
            exports: __spreadArrays(appCommonContainers.containers, appCommonComponents.components, thirdParty)
        })
    ], AppCommonModule);
    return AppCommonModule;
}());
exports.AppCommonModule = AppCommonModule;
