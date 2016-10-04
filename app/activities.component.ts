import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Activity } from './activity';
import { ActivityService } from './activity.service';

@Component({
	moduleId: module.id,
	selector: 'my-activities',
	templateUrl: 'activities.component.html',
  styleUrls: [ 'activities.component.css']
})

export class ActivitiesComponent implements OnInit { 
	activities: Activity[];
	selectedActivity: Activity;

	constructor(
		private router: Router,
		private activityService: ActivityService) { }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.activityService.create(name)
      .then(activity => {
        this.activities.push(activity);
        this.selectedActivity = null;
      });
  }

  delete(activity: Activity): void {
    this.activityService
    .delete(activity.id)
    .then(() => {
      this.activities = this.activities.filter(h => h !== activity);
      if (this.selectedActivity === activity) {this.selectedActivity = null;}
    });
  }

	getActivities(): void {
		this.activityService.getActivities().then(activities => this.activities = activities);
	}

	ngOnInit(): void {
		this.getActivities();
	}

	onSelect(activity:Activity): void {
		this.selectedActivity = activity;
	}
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedActivity.id]);
  }
}




	
	


