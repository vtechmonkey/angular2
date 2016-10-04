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
var activity_service_1 = require('./activity.service');
var ActivityComponent = (function () {
    function ActivityComponent(activityService) {
        this.activityService = activityService;
        this.title = 'Bubblbook';
    }
    ActivityComponent.prototype.getActivities = function () {
        var _this = this;
        this.activityService.getActivitiesSlowly().then(function (activities) { return _this.activities = activities; });
    };
    ActivityComponent.prototype.ngOnInit = function () {
        this.getActivities();
    };
    ActivityComponent.prototype.onSelect = function (activity) {
        this.selectedActivity = activity;
    };
    ActivityComponent = __decorate([
        core_1.Component({
            selector: 'my-activities',
            template: "\n\t\t<h1>{{title}}</h1>\n\t\t\n\t\t<ul class=\"activities\">\n\t\t\t<li *ngFor=\"let activity of activities\"\n\t\t\t[class.selected]=\"activity === selectedActivity\" \n\t\t\t(click)=\"onSelect(activity)\">\n\t\t\t\t<span class=\"badge\">{{activity.id}} </span> {{activity.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t<my-activity-detail [activity]=\"selectedActivity\"></my-activity-detail>\n\t",
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .activities {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .activities li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .activities li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .activities li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .activities .text {\n    position: relative;\n    top: -3px;\n  }\n  .activities .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"],
            providers: [activity_service_1.ActivityService]
        }), 
        __metadata('design:paramtypes', [activity_service_1.ActivityService])
    ], ActivityComponent);
    return ActivityComponent;
}());
exports.ActivityComponent = ActivityComponent;
//# sourceMappingURL=activity.component.js.map