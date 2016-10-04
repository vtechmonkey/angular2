"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var activity_search_service_1 = require('./activity-search.service');
var ActivitySearchComponent = (function () {
    function ActivitySearchComponent(activitySearchService, router) {
        this.activitySearchService = activitySearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    //Push a search term into the observable stream 
    ActivitySearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    ActivitySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activities = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() //ignore if next search te  rm is same as previous
            .switchMap(function (term) { return term // switch to new observable each time )
            ? _this.activitySearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    ActivitySearchComponent.prototype.gotoDetail = function (activity) {
        var link = ['/detail', activity.id];
        this.router.navigate(link);
    };
    ActivitySearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'activity-search',
            templateUrl: 'activity-search.component.html',
            styleUrls: ['activity-search.component.css'],
            providers: [activity_search_service_1.ActivitySearchService]
        }), 
        __metadata('design:paramtypes', [activity_search_service_1.ActivitySearchService, router_1.Router])
    ], ActivitySearchComponent);
    return ActivitySearchComponent;
}());
exports.ActivitySearchComponent = ActivitySearchComponent;
//# sourceMappingURL=activity-search.component.js.map