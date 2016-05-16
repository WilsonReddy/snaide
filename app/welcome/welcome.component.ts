import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: 'app/welcome/welcome.component.html',
    styleUrls: ['app/welcome/welcome.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class WelcomeComponent implements OnInit {
    errorMessage: string;

    pageTitle: string = ' Welcome to Social Network Aide Application.';
    constructor() {
        console.log("I am in Welcome")
    }

    ngOnInit(): void {
        console.log("Welcome initiated")
    }

}
