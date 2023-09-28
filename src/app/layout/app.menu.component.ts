import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
	selector: 'app-menu',
	templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

	model: any[] = [];

	constructor(public layoutService: LayoutService) { }

	ngOnInit() {
		this.model = [
			{
				label: 'Home',
				items: [
					{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
					{ label: 'Add Player', icon: 'pi pi-users', routerLink: ['/add-player'] },
					{ label: 'Split Teams', icon: 'pi pi-users', routerLink: ['/team-splitter'] }
				]
			}
		];
	}
}
