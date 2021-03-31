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
exports.NavigationModule = void 0;
/* tslint:disable: ordered-imports*/
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
/* Modules */
var app_common_module_1 = require("@common/app-common.module");
/* Components */
var navigationComponents = require("./components");
/* Containers */
var navigationContainers = require("./containers");
/* Layouts */
var appCommonLayouts = require("./layouts");
/* Guards */
var navigationGuards = require("./guards");
/* Services */
var navigationServices = require("./services");
var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, app_common_module_1.AppCommonModule],
            providers: __spreadArrays(navigationServices.services, navigationGuards.guards),
            declarations: __spreadArrays(navigationContainers.containers, navigationComponents.components, appCommonLayouts.layouts),
            exports: __spreadArrays(navigationContainers.containers, navigationComponents.components, appCommonLayouts.layouts)
        })
    ], NavigationModule);
    return NavigationModule;
}());
exports.NavigationModule = NavigationModule;
