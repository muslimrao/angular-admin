"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var jquery_1 = require("jquery");
var operators_1 = require("rxjs/operators");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, titleService, spinner) {
        var _this = this;
        this.router = router;
        this.titleService = titleService;
        this.spinner = spinner;
        this.title = 'sb-admin-angular';
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.ChildActivationEnd; }))
            .subscribe(function (event) {
            var snapshot = event.snapshot;
            while (snapshot.firstChild !== null) {
                snapshot = snapshot.firstChild;
            }
            _this.titleService.setTitle(snapshot.data.title || 'EASERP');
        });
        this.router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationStart) {
                _this.spinner.show();
            }
        });
        this.router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationEnd) {
                _this.spinner.hide();
                jquery_1["default"](document).ready(function () {
                    jquery_1["default"]('.parentClass').each(function () {
                        // $(".table-heading").text()
                        jquery_1["default"](this)
                            .find('li.li')
                            .each(function () {
                            if (jquery_1["default"](this).text().trim() === jquery_1["default"]('.table-heading').text().trim()) {
                                jquery_1["default"](this).parent()[0].click();
                                var SI_1 = setInterval(function () {
                                    if (jquery_1["default"](".nav-link.collapsed:contains('" +
                                        jquery_1["default"]('.table-heading').text().trim() +
                                        "')").length > 0) {
                                        jquery_1["default"](".nav-link.collapsed:contains('" +
                                            jquery_1["default"]('.table-heading').text().trim() +
                                            "')").addClass('active');
                                        clearInterval(SI_1);
                                    }
                                }, 500);
                            }
                        });
                    });
                    // console.log( $(".parentClass") );
                });
            }
        });
        /**/
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
