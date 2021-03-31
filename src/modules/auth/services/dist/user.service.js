"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var userSubject = new rxjs_1.ReplaySubject(1);
var UserService = /** @class */ (function () {
    function UserService() {
        this.user = {
            id: '123',
            firstName: 'Muslim',
            lastName: 'RaZa',
            email: 'fairsit.m@gmail.com'
        };
    }
    Object.defineProperty(UserService.prototype, "user", {
        set: function (user) {
            userSubject.next(user);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "user$", {
        get: function () {
            return userSubject.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
