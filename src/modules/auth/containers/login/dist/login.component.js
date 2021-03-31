"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var environment_1 = require("environments/environment");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, authService, router, spinner) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.spinner = spinner;
        this._url = environment_1.environment.apiURL + 'api/login';
        this.addLogin = new forms_1.FormGroup({
            email: new forms_1.FormControl(''),
            password: new forms_1.FormControl('')
        });
        this.inlineMessage = {
            heading: '',
            message: '',
            type: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.saveLogin = function () {
        var _this = this;
        this.spinner.show();
        this.authService.postLogin(this.addLogin.value).subscribe(function (res) {
            _this.spinner.hide();
            _this.inlineMessage.heading = '';
            _this.inlineMessage.type = 'success';
            _this.inlineMessage.message = 'Login Successful';
            _this.ProcessLogin(res);
        }, function (err) {
            _this.spinner.hide();
            _this.inlineMessage.heading = '';
            _this.inlineMessage.type = 'danger';
            _this.inlineMessage.message = 'Invalid Credentials';
        });
    };
    LoginComponent.prototype.ProcessLogin = function (response) {
        if (response.status) {
            localStorage.setItem('token', response.access_token);
            this.router.navigate(['/dashboard']);
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'sb-login',
            changeDetection: core_1.ChangeDetectionStrategy.Default,
            templateUrl: './login.component.html',
            styleUrls: ['login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
