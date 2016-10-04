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
var activity_service_1 = require('./activity.service');
var ActivitiesComponent = (function () {
    function ActivitiesComponent(router, activityService) {
        this.router = router;
        this.activityService = activityService;
    }
    ActivitiesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.activityService.create(name)
            .then(function (activity) {
            _this.activities.push(activity);
            _this.selectedActivity = null;
        });
    };
    ActivitiesComponent.prototype.delete = function (activity) {
        var _this = this;
        this.activityService
            .delete(activity.id)
            .then(function () {
            _this.activities = _this.activities.filter(function (h) { return h !== activity; });
            if (_this.selectedActivity === activity) {
                _this.selectedActivity = null;
            }
        });
    };
    ActivitiesComponent.prototype.getActivities = function () {
        var _this = this;
        this.activityService.getActivities().then(function (activities) { return _this.activities = activities; });
    };
    ActivitiesComponent.prototype.ngOnInit = function () {
        this.getActivities();
    };
    ActivitiesComponent.prototype.onSelect = function (activity) {
        this.selectedActivity = activity;
    };
    ActivitiesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedActivity.id]);
    };
    ActivitiesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-activities',
            templateUrl: 'activities.component.html',
            styleUrls: ['activities.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, activity_service_1.ActivityService])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());
exports.ActivitiesComponent = ActivitiesComponent;
//# sourceMappingURL=activities.component.js.map