import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { observable, Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    getAuth$(): Observable<{}> {
        return of({});
    }

    postLogin(credentials = []) {
        const loginURL = environment.apiURL + 'api/login';
        return this.http.post(loginURL, credentials); // .toPromise();
    }

    /*
    postLoginPromise(credentials = []) {
        const loginURL = environment.apiURL + 'api/login';
        return this.http.post(loginURL, credentials).toPromise();
    }


    test() {
        return throwError('ANSAFF');
    }  */
}
