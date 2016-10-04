import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }			 from 'rxjs/Subject';

import { ActivitySearchService } from './activity-search.service';
import { Activity } 			 from './activity';

@Component({
	moduleId: module.id,
	selector: 'activity-search',
	templateUrl: 'activity-search.component.html',
	styleUrls: [ 'activity-search.component.css'],
	providers: [ActivitySearchService]
})

export class ActivitySearchComponent implements OnInit {
	activities: Observable<Activity[]>;
	private searchTerms = new Subject<string>();

constructor(
	private activitySearchService: ActivitySearchService,
	private router: Router) {}

	//Push a search term into the observable stream 
	search(term: string): void{
		this.searchTerms.next(term);
	}	

ngOnInit(): void {
	this.activities = this.searchTerms
	.debounceTime(300) // wait for 300ms pause in events
	.distinctUntilChanged() //ignore if next search te  rm is same as previous
	.switchMap(term => term // switch to new observable each time )
// return the http search observable 
? this.activitySearchService.search(term)
// or the observable of empty heroes if no search term
: Observable.of<Activity[]>([]))
.catch(error => {
	// TODO: real error handling
	console.log(error);
	return Observable.of<Activity[]>([]);
});
}
gotoDetail(activity: Activity): void {
	let link = ['/detail', activity.id];
	this.router.navigate(link);
}
}