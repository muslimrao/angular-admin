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
exports.AuthModule = void 0;
/* tslint:disable: ordered-imports*/
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
/* Modules */
var app_common_module_1 = require("@common/app-common.module");
var navigation_module_1 = require("@modules/navigation/navigation.module");
/* Components */
var authComponents = require("./components");
/* Containers */
var authContainers = require("./containers");
/* Guards */
var authGuards = require("./guards");
/* Services */
var authServices = require("./services");
var show_messages_module_1 = require("../show-messages/show-messages.module");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                app_common_module_1.AppCommonModule,
                navigation_module_1.NavigationModule,
                show_messages_module_1.ShowMessagesModule,
            ],
            providers: __spreadArrays(authServices.services, authGuards.guards),
            declarations: __spreadArrays(authContainers.containers, authComponents.components),
            exports: __spreadArrays(authContainers.containers, authComponents.components)
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
