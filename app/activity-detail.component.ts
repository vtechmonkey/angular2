import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';
import { Location }					from '@angular/common';

import { Activity } 	   from './activity';
import { ActivityService } from './activity.service';

@Component({
	moduleId: module.id,
	selector: 'my-activity-detail',
	templateUrl: 'activity-detail.component.html',
	styleUrls: ['activity-detail.component.css']

})


export class ActivityDetailComponent implements OnInit {

	activity: Activity;

	constructor(
		private activityService: ActivityService,
		private route: ActivatedRoute,
		private location: Location
	){}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) =>{
			let id = +params['id'];
			this.activityService.getActivity(id)
			.then(activity => this.activity = activity);
		});
	}
	save(): void {
		this.activityService.update(this.activity)
			.then(() => this.goBack());
	}
	goBack(): void {
		this.location.back();
	}

}