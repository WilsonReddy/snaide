import { Injectable } from '@angular/core';
import { Jsonp, Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ITwitter } from './Twitter';
@Injectable()
export class TwitterService {
    constructor(private jsonp: Jsonp, private _http: Http) { }       
    //SEARCH_TWEETS_URL: string = 'https://twitter.com/search?q=montreal&callback=JSONP_CALLBACK';
    SEARCH_TWEETS_URL: string = 'https://twitter.com/i/search/timeline?f=realtime&q=angular2&src=typd&include_available_features=1&include_entities=1&last_note_ts=85'
    
    getTweets(tweetName:string){  
        var authHeader = new Headers();
        // authHeader.append('Authorization', "Bearer AAAAAAAAAAAAAAAAAAAAALa4vAAAAAAAZqCyZq2mWnEOV61n8cXshrpP9Zk%3DDENEAb8pQJV8aisNXjRlwRFsHUCoXRX827VLct98TrPAfceXDY"); 
        authHeader.append('Content-Type', "application/javascript"); 
        authHeader.append('Access-Control-Allow-Origin','*')
        
       
        // return this._http.get(this.SEARCH_TWEETS_URL, {headers:authHeader})
        //             .toPromise()
        //             .then((response) => response.json()[1]);
                // .map((response:Response)=><ITwitter[]>response.json())
                // .do(data=>console.log('ALL:' + JSON.stringify(data)))
                // .catch(this.handleError);
        
        

        return this.jsonp.get(this.SEARCH_TWEETS_URL, {headers:authHeader})
                .toPromise()
                .then((response) => response.json()[1]);

    }
    
    
    
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    
}