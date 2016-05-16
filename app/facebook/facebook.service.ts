import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IFacebook } from './Facebook';

let facebookAppId = "693175194155426";
let returnUrl = "http://snaide.2016.angularattack.io/facebook";

@Injectable()
export class FacebookService {
    private _fbUrl = "https://www.facebook.com/dialog/oauth?client_id=" + facebookAppId + "&redirect_uri=" + returnUrl;
    
    constructor(private _http: Http) { }

    fbLogin(): Observable<IFacebook> {
        var authHeader = new Headers();
        //authHeader.append('Authorization', this.authorizationHeader);   
        authHeader.append('Access-Control-Allow-Methods', "POST, GET, OPTIONS, PUT, DELETE");  
        authHeader.append('Access-Control-Allow-Origin', "*");
        return this._http.get(this._fbUrl, { headers: authHeader}).map((response: Response) => <IFacebook>response.json())
                    .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
