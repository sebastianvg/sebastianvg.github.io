import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TeamSplitterComponent } from './team-splitter/team-splitter.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PickListModule } from 'primeng/picklist';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		TeamSplitterComponent,
		EditPlayerComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AppLayoutModule,
		HttpClientModule,
		CardModule,
		ButtonModule,
		FormsModule,
		InputTextModule,
		DropdownModule,
		PickListModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
