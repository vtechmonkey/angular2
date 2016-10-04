import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Activity } from './activity';
import { ActivityService } from './activity.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  activities: Activity[] = [];

  constructor(
    private router: Router,
    private activityService: ActivityService) {
  }

  ngOnInit(): void {
    this.activityService.getActivities()
      .then(activities => this.activities = activities.slice(1, 5));
  }

  gotoDetail(activity: Activity): void {
    let link = ['/detail', activity.id];
    this.router.navigate(link);
  }
}
