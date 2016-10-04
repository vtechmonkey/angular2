import { Injectable } 		from '@angular/core';
import { Headers, Http }	from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Activity } from './activity';

@Injectable()
export class ActivityService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private activitiesUrl = 'app/activities'; // URL to web api

	constructor(private http: Http) { }

	getActivities(): Promise<Activity[]> {
		return this.http.get(this.activitiesUrl)
		.toPromise()
		.then(response => response.json().data as Activity[])
		.catch(this.handleError);
	}
	//take it slow..
	getActivitiesSlowly(): Promise<Activity[]>{
		return new Promise<Activity[]>(resolve =>
		setTimeout(resolve,2000))
	.then(() => this.getActivities());
	}
	getActivity(id: number): Promise<Activity> {
		return this.getActivities()
		.then(activities => activities.find(activity => activity.id === id));
	}
	delete(id: number): Promise<void> {
	    const url = `${this.activitiesUrl}/${id}`;
	    return this.http.delete(url, {headers: this.headers})
	      .toPromise()
	      .then(() => null)
	      .catch(this.handleError);
	}
	create(name:string): Promise<Activity> {
		return this.http
			.post(this.activitiesUrl, JSON.stringify({name: name}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}
	update(activity: Activity): Promise<Activity> {
		const url = `${this.activitiesUrl}/${activity.id}`;
		return this.http
			.put(url, JSON.stringify(activity), {headers: this.headers})
			.toPromise()
			.then(() => activity)
			.catch(this.handleError);			
	}
	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
	  }
}
