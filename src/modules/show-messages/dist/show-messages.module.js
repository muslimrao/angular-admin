"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShowMessagesModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var inline_component_1 = require("./inline/inline.component");
/* Third Party */
var ShowMessagesModule = /** @class */ (function () {
    function ShowMessagesModule() {
    }
    ShowMessagesModule = __decorate([
        core_1.NgModule({
            declarations: [inline_component_1.InlineComponent],
            imports: [common_1.CommonModule, ng_bootstrap_1.NgbModule],
            exports: [inline_component_1.InlineComponent]
        })
    ], ShowMessagesModule);
    return ShowMessagesModule;
}());
exports.ShowMessagesModule = ShowMessagesModule;
