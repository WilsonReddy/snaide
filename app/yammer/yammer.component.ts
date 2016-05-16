declare var yam: any;

import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { IYammer } from './yammer';
import { YammerService } from './yammer.service';

@Component({
    templateUrl: 'app/yammer/yammer.component.html',
    styleUrls: ['app/yammer/yammer.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class yammerComponent implements OnInit {
    errorMessage: string;
    yammer: IYammer[];
    companyName: 'Microsoft.com';

    pageTitle: string = 'Welcome to yammer';
    constructor(private _yammerService: YammerService) {
        console.log("I am in yammer")
    }

    ngOnInit(): void {

            yam.connect.loginButton('#yammer-login', function (resp) {
                if (resp.authResponse) {
                    document.getElementById('yammer-login').innerHTML = 'Welcome to Yammer!';
                }
        });

            this._yammerService.getFeed(this.companyName).subscribe(
                yammerModel => this.yammer = yammerModel//,

            yam.connect.embedFeed({
                container: "#embedded-feed",
                network: "microsoft.com",
               // feedType: "group",
               // feedId: "660"
            });

        console.log("yammer initiated")
    }

}
