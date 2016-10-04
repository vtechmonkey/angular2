import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import  './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }            from './app.component';
import { DashboardComponent }      from './dashboard.component';
import { ActivitiesComponent }     from './activities.component';
import { ActivityDetailComponent } from './activity-detail.component';
import { ActivityService }         from './activity.service';
import { ActivitySearchComponent } from './activity-search.component';
import { routing }                 from './app.routing';

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  	routing
   ],
  declarations: [ 
  	AppComponent,
  	DashboardComponent, 
  	ActivityDetailComponent,
  	ActivitiesComponent,
    ActivitySearchComponent
   ],
   providers: [
   ActivityService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
