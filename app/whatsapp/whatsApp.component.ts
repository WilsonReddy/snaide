import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { IWhatsApp } from './whatsApp';
import { whatsAppService } from './whatsApp.service';

@Component({
    templateUrl: 'app/whatsApp/whatsApp.component.html',
    styleUrls: ['app/whatsApp/whatsApp.component.css'],    
    directives: [ROUTER_DIRECTIVES]
})
export class whatsAppComponent implements OnInit {    
    errorMessage: string;
    whatsApp: IWhatsApp[];

    pageTitle: string = 'Welcome to whatsApp';
    constructor(private _whatsAppService: whatsAppService) {
        console.log("I am in whatsApp")
    }   

    ngOnInit(): void {
        console.log("whatsApp initiated")
    }
    
}
