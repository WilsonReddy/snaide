import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IMatrix } from './matrix';

@Injectable()
export class MatrixService {
    private _matrixUrl = 'api/matrix/matrix.json';
    private _matrix: IMatrix[];

    constructor(private _http: Http) { }

    //getMatrixes(): Observable<IMatrix[]> {
    //    return this._http.get(this._matrixUrl)
    //        .map((response: Response) => <IMatrix[]>response.json())
    //        .do(data => console.log('All: ' + JSON.stringify(data)))
    //        .catch(this.handleError);
    //}

    getMatrix(): IMatrix{
        return {
            matrixId: 1,
            matrixName: "Dark Hole",
            matrixCode: "dark-0011",
            joinedDate: "next second",
            description: "Follow your heart...jump in....",
            price: 0,
            imageUrl: "app/assets/images/darkhole.jpg"
        };
    }

    getMatrixfromFile(): Observable<IMatrix[]> {
        return this._http.get(this._matrixUrl)
            .map((response: Response) => <IMatrix[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
