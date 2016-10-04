import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ActivitiesComponent } from './activities.component';
import { ActivityDetailComponent } from './activity-detail.component';

const appRoutes: Routes = [
{
	path:'',
	redirectTo: '/dashboard',
	pathMatch: 'full'
},
{
	path: 'dashboard',
	component: DashboardComponent
},
{
	path: 'activities',
	component: ActivitiesComponent
},
{
	path: 'detail/:id',
	component: ActivityDetailComponent 
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
