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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ActivityService = (function () {
    function ActivityService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.activitiesUrl = 'app/activities'; // URL to web api
    }
    ActivityService.prototype.getActivities = function () {
        return this.http.get(this.activitiesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    //take it slow..
    ActivityService.prototype.getActivitiesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        })
            .then(function () { return _this.getActivities(); });
    };
    ActivityService.prototype.getActivity = function (id) {
        return this.getActivities()
            .then(function (activities) { return activities.find(function (activity) { return activity.id === id; }); });
    };
    ActivityService.prototype.delete = function (id) {
        var url = this.activitiesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ActivityService.prototype.create = function (name) {
        return this.http
            .post(this.activitiesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ActivityService.prototype.update = function (activity) {
        var url = this.activitiesUrl + "/" + activity.id;
        return this.http
            .put(url, JSON.stringify(activity), { headers: this.headers })
            .toPromise()
            .then(function () { return activity; })
            .catch(this.handleError);
    };
    ActivityService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ActivityService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ActivityService);
    return ActivityService;
}());
exports.ActivityService = ActivityService;
//# sourceMappingURL=activity.service.js.map