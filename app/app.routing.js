"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var activities_component_1 = require('./activities.component');
var activity_detail_component_1 = require('./activity-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'activities',
        component: activities_component_1.ActivitiesComponent
    },
    {
        path: 'detail/:id',
        component: activity_detail_component_1.ActivityDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map