import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChildActivationEnd, NavigationEnd, NavigationStart, Router } from '@angular/router';
import $ from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'sb-admin-angular';
    constructor(
        public router: Router,
        private titleService: Title,
        private spinner: NgxSpinnerService
    ) {
        this.router.events
            .pipe(filter(event => event instanceof ChildActivationEnd))
            .subscribe(event => {
                let snapshot = (event as ChildActivationEnd).snapshot;
                while (snapshot.firstChild !== null) {
                    snapshot = snapshot.firstChild;
                }
                this.titleService.setTitle(snapshot.data.title || 'EASERP');
            });

        this.router.events.subscribe(e => {
            if (e instanceof NavigationStart) {
                this.spinner.show();
            }
        });

        this.router.events.subscribe(e => {
            if (e instanceof NavigationEnd) {
                this.spinner.hide();
                $(document).ready(function () {
                    $('.parentClass').each(function () {
                        // $(".table-heading").text()

                        $(this)
                            .find('li.li')
                            .each(function () {
                                if ($(this).text().trim() === $('.table-heading').text().trim()) {
                                    $(this).parent()[0].click();
                                    const SI = setInterval(function () {
                                        if (
                                            $(
                                                ".nav-link.collapsed:contains('" +
                                                    $('.table-heading').text().trim() +
                                                    "')"
                                            ).length > 0
                                        ) {
                                            $(
                                                ".nav-link.collapsed:contains('" +
                                                    $('.table-heading').text().trim() +
                                                    "')"
                                            ).addClass('active');
                                            clearInterval(SI);
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
}
