import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { IMatrix } from './matrix';
import { MatrixService } from './matrix.service';

@Component({
    templateUrl: 'app/matrix/matrix-detail.component.html',
    styleUrls: ['app/matrix/matrix-detail.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class MatrixDetailComponent implements OnInit {
    pageTitle: string = 'Matrix Detail';
    matrix: IMatrix;
    matrixes: IMatrix[];
    errorMessage: string;

    constructor(private _matrixService: MatrixService) {
        console.log("I am in matrix");
    }

    ngOnInit() {
        console.log("matrix initiated.");
        this.matrix = this._matrixService.getMatrix();
        //this._matrixService.getMatrixfromFile()
        //    .subscribe(
        //    matrixes => this.matrixes = matrixes,
        //    error => this.errorMessage = <any>error);
        //console.log(this.matrixes.length);
        //this.matrix = this.matrixes[0];
    }

    onWelcom(): void {
        //this._router.navigate(['Matrix']);
        alert("ha! got you!");
    }

}
