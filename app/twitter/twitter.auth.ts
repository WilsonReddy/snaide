import { Injectable } from '@angular/core';
import { Http, Response, Headers, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TwitterAuth {
    constructor(private _http:Http, private _jsonp:Jsonp){}
    apiKey:string="eOMWfHpPUl6U2n7Q7oHhhZl8P";
    apiSecret:string="5td8XUjp7d7Rsqu8iyKuRlnoUd8fLxoikKzfgc4d0RNjpGVjrZ";
    apiBase:string = 'https://api.twitter.com/oauth2/token';
    encodedApiKey:string = encodeURIComponent(this.apiKey);
    encodedSecret:string = encodeURIComponent(this.apiSecret);
    
    credentials:string = btoa(this.encodedApiKey + ':' + this.encodedSecret);
    
    // getTweetBearerToken():Observable<string>{  
    //     //Access-Control-Allow-Origin
    //     return this._jsonp.request(url:apiBase, { method: 'Get', headers: authHeader })
    // }  
}