import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IYammer } from './Yammer';
@Injectable()
export class YammerService {
    constructor(private _http: Http) { }
    authorizationHeader: string
    FEED_URL: string = 'https://www.yammer.com/api/v1/messages/my_feed.json';
    getFeed(feedName: string): Observable<IYammer[]> {
        var authHeader = new Headers();
        authHeader.append('Authorization', this.authorizationHeader);
        authHeader.append('Access-Control-Allow-Methods', "POST, GET, OPTIONS, PUT, DELETE");
        authHeader.append('Access-Control-Allow-Origin', "*");
        return this._http.get(this.FEED_URL + feedName, { headers: authHeader })
            .map((response: Response) => <IYammer[]>response.json())
            .do(data => console.log('ALL:' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}