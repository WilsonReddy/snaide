System.register(['../../Observable', '../../operator/bufferCount'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, bufferCount_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (bufferCount_1_1) {
                bufferCount_1 = bufferCount_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
        }
    }
});
//# sourceMappingURL=bufferCount.js.map