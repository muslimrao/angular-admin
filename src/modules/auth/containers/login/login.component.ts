import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import {} from 'rxjs/add/operator/catch';
import {NgxSpinnerService} from 'ngx-spinner'
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(
        private http: HttpClient,
        private authService: AuthService,
        private router: Router,
        private spinner: NgxSpinnerService
    ) {}

    _url = environment.apiURL + 'api/login';
    addLogin = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    });

    inlineMessage = {
        heading: '',
        message: '',
        type: '',
    };

    ngOnInit() {}

    saveLogin() {
        this.spinner.show();
        this.authService.postLogin(this.addLogin.value).subscribe(
            res => {
                this.spinner.hide();
                this.inlineMessage.heading = '';
                this.inlineMessage.type = 'success';
                this.inlineMessage.message = 'Login Successful';
                this.ProcessLogin(res);
            },
            err => {
                this.spinner.hide();
                this.inlineMessage.heading = '';
                this.inlineMessage.type = 'danger';
                this.inlineMessage.message = 'Invalid Credentials';
            }
        );
    }

    ProcessLogin(response: any) {
        if (response.status) {
            localStorage.setItem('token', response.access_token);
            this.router.navigate(['/dashboard']);
        }
    }
}
