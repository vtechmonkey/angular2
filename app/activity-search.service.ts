import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Activity } from './activity';

@Injectable()
export class ActivitySearchService {
	constructor(private http: Http) {}

	search(term: string): Observable<Activity[]> {
		return this.http
		.get(`app/activities/?name=${term}`)
		.map((r: Response) => r.json().data as Activity[]);
	}
}