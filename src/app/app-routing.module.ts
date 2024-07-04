import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamSplitterComponent } from './team-splitter/team-splitter.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';

const routes: Routes = [
	{
		path: '', component: AppLayoutComponent,
		children: [
			{ path: '', component: DashboardComponent },
			{ path: 'team-splitter', component: TeamSplitterComponent },
			{ path: 'players', component: EditPlayerComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
