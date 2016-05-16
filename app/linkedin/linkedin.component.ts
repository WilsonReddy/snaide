import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ILinkedin } from './Linkedin';
import { LinkedinService } from './linkedin.service';

@Component({
    templateUrl: 'app/linkedin/linkedin.component.html',
    styleUrls: ['app/linkedin/linkedin.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class LinkedinComponent implements OnInit {
    errorMessage: string;
    linkedin: ILinkedin[];

    pageTitle: string = 'coming soon....';
    constructor(private _linkedinService: LinkedinService) {
        console.log("I am in linkedin")
    }

    ngOnInit(): void {
        console.log("linkedin initiated")
    }

}
