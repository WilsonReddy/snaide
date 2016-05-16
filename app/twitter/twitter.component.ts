import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ITwitter } from './Twitter';
import { TwitterService } from './twitter.service';
import { TwitterAuth } from './twitter.auth';

@Component({
    templateUrl: 'app/twitter/twitter.component.html',
    styleUrls: ['app/twitter/twitter.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers:[TwitterService, TwitterAuth]
})
export class TwitterComponent implements OnInit {
    errorMessage: string;
    twitterModel: ITwitter[];
    twitterName:string;
    pageTitle: string = 'Welcome to twitter';
    twitterToken:string='';
    items: Array<string>;
    loggedIn:boolean=false;
    
    constructor(private _twitterService: TwitterService) {        
        
    }
    
    getTweets(){
        console.log("Tweet Button clicked");
        this._twitterService.getTweets(this.twitterName).then(items => this.items = items);
        
    }

    ngOnInit(): void {
        this.twitterName = "angular2";
    }
    
    logout() {
        this.loggedIn = false;
    }
    
    login() {
        this.loggedIn = true;
    }

}
