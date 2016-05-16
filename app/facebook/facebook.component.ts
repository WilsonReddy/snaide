declare var FB: any;

import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { IFacebook } from './Facebook';
import { IFacebookActivity } from './facebookActivity';
import { FacebookService } from './facebook.service';

@Component({
    templateUrl: 'app/facebook/facebook.component.html',
    styleUrls: ['app/facebook/facebook.component.css'],    
    directives: [ROUTER_DIRECTIVES]
})
export class FacebookComponent implements OnInit {   
    fbOauth: IFacebook; 
    errorMessage: string;
    facebook: IFacebook[];
    facebookActivity: IFacebookActivity;

    pageTitle: string = 'Facebook activity';
    likePost: number = 5;
    likedComments: number = 14;
    likedShares: number = 32;
    postsOnWall: number = 22;
    recentMsgs: number = 1;
    
    
    constructor(private _faceBookService: FacebookService) {
        console.log("I am in facebook");
    }   

    ngOnInit(): void {
        console.log("facebook initiated");
    };

    fbLogin(): void {
        //this.facebookActivity.likedComment = 5;
        this._faceBookService.fbLogin().subscribe(fbOuth => this.fbOauth = fbOuth, error => this.errorMessage = <any>error)
    };

    checkLoginState(): void {
        FB.getLoginStatus(function (response) {
            console.log('statusChangeCallback');
            console.log(response);
            // The response object is returned with a status field that lets the
            // app know the current login status of the person.
            // Full docs on the response object can be found in the documentation
            // for FB.getLoginStatus().
            if (response.status === 'connected') {
                // Logged into your app and Facebook.
                //testAPI();
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function (response) {
                    console.log('Successful login for: ' + response.name);
                    document.getElementById('status').innerHTML =
                        'Thanks for logging in, ' + response.name + '!';
                });
            } else if (response.status === 'not_authorized') {
                // The person is logged into Facebook, but not your app.
                document.getElementById('status').innerHTML = 'Please log ' +
                    'into this app.';
            } else {
                // The person is not logged into Facebook, so we're not sure if
                // they are logged into this app or not.
                document.getElementById('status').innerHTML = 'Please log ' +
                    'into Facebook.';
            }
        });
    }

    testAPI(): void {
        // Here we run a very simple test of the Graph API after login is
        // successful.  See statusChangeCallback() for when this call is made.
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function (response) {
                console.log('Successful login for: ' + response.name);
                document.getElementById('status').innerHTML =
                    'Thanks for logging in, ' + response.name + '!';
            });       
    }
    
}
