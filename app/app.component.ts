import { Component } from '@angular/core';
import { HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { FacebookComponent } from './facebook/facebook.component';
import { FacebookService } from './facebook/facebook.service';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { LinkedinService } from './linkedin/linkedin.service';
import { TwitterComponent } from './twitter/twitter.component';
import { TwitterService } from './twitter/twitter.service';
import { whatsAppComponent } from './whatsapp/whatsApp.component';
import { whatsAppService } from './whatsapp/whatsApp.service';
import { yammerComponent } from './yammer/yammer.component';
import { YammerService } from './yammer/yammer.service';
import { MatrixDetailComponent } from './matrix/matrix-detail.component';
import { MatrixService } from './matrix/matrix.service';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
    selector: 'snaide-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/facebook']">Facebook</a></li>
                    <li><a [routerLink]="['/twitter']">Twitter</a></li>
                    <li><a [routerLink]="['/yammer']">Yammer</a></li>
                    <li><a [routerLink]="['/matrix']">Matrix</a></li>
                    <li><a [routerLink]="['/linkedin']">LinkedIn</a></li>
                    <li><a [routerLink]="['/whatsapp']">WhatsApp</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>           
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [FacebookService,
                LinkedinService,
                TwitterService,
                whatsAppService,
                MatrixService,
                YammerService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@Routes([
        { path: '/', component: WelcomeComponent },
        { path: '/welcome', component: WelcomeComponent },
        { path: '/facebook', component: FacebookComponent },
        { path: '/linkedin', component: LinkedinComponent },
        { path: '/twitter', component: TwitterComponent },
        { path: '/whatsapp', component: whatsAppComponent },
        { path: '/matrix', component: MatrixDetailComponent },
        { path: '/yammer', component: yammerComponent },
])
export class AppComponent {
    pageTitle: string = 'Welcome to...';
}
