System.register(['../Subscriber', '../Notification'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, Notification_1;
    var MaterializeOperator, MaterializeSubscriber;
    /**
     * Returns an Observable that represents all of the emissions and notifications
     * from the source Observable into emissions marked with their original types
     * within a `Notification` objects.
     *
     * <img src="./img/materialize.png" width="100%">
     *
     * @see {@link Notification}
     *
     * @scheduler materialize does not operate by default on a particular Scheduler.
     * @return {Observable<Notification<T>>} an Observable that emits items that are the result of
     * materializing the items and notifications of the source Observable.
     * @method materialize
     * @owner Observable
     */
    function materialize() {
        return this.lift(new MaterializeOperator());
    }
    exports_1("materialize", materialize);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (Notification_1_1) {
                Notification_1 = Notification_1_1;
            }],
        execute: function() {
            MaterializeOperator = (function () {
                function MaterializeOperator() {
                }
                MaterializeOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new MaterializeSubscriber(subscriber));
                };
                return MaterializeOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            MaterializeSubscriber = (function (_super) {
                __extends(MaterializeSubscriber, _super);
                function MaterializeSubscriber(destination) {
                    _super.call(this, destination);
                }
                MaterializeSubscriber.prototype._next = function (value) {
                    this.destination.next(Notification_1.Notification.createNext(value));
                };
                MaterializeSubscriber.prototype._error = function (err) {
                    var destination = this.destination;
                    destination.next(Notification_1.Notification.createError(err));
                    destination.complete();
                };
                MaterializeSubscriber.prototype._complete = function () {
                    var destination = this.destination;
                    destination.next(Notification_1.Notification.createComplete());
                    destination.complete();
                };
                return MaterializeSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});
//# sourceMappingURL=materialize.js.map