import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Player } from '../shared/dtos/player.dto';
import { Team } from '../shared/dtos/team.dto';
import { TeamSplitterService } from '../shared/services/team-splitter.service';
import { EditPlayerService } from '../shared/services/edit-player.service';

@Component({
	selector: 'app-team-splitter',
	templateUrl: './team-splitter.component.html',
	styleUrls: ['./team-splitter.component.css']
})
export class TeamSplitterComponent implements OnInit {

	teams!: [Team, Team] | null;
	playersAvailable!: Player[];
	playersSelected!: Player[];
	lightTeam: Team | undefined;
	darkTeam: Team | undefined;
	// players: Player[] = [
	// 	// { name: "Emma", level: 9, position: "Goalkeeper" },
	// 	{ name: "Sophie", level: 10, position: "Goalkeeper" },
	// 	// { name: "Guti", level: 8, position: "Forward" },
	// 	// { name: "Ruby", level: 10, position: "Defender" },
	// 	{ name: "Norma", level: 5, position: "Forward" },
	// 	{ name: "Macca", level: 8.5, position: "Defender" },
	// 	{ name: "Romy", level: 9.5, position: "Defender" },
	// 	{ name: "Andre Cadavid", level: 6, position: "Forward" },
	// 	{ name: "Lucy", level: 6, position: "Defender" },
	// 	// { name: "Margarita", level: 10, position: "Goalkeeper" }
	// 	{ name: "Jenny", level: 6, position: "Goalkeeper" },
	// 	{ name: "Candice", level: 7, position: "Forward" },
	// 	{ name: "Vane", level: 9, position: "Forward" },
	// 	{ name: "Ezgi", level: 2, position: "Forward" }
	// ];

	constructor(private teamSplitterService: TeamSplitterService, private cdr: ChangeDetectorRef, private editPlayerService: EditPlayerService) {

	}

	ngOnInit(): void {
		this.teamSplitterService.getPlayersList().subscribe(playersList => {
			this.playersAvailable = playersList;
			this.cdr.markForCheck();
			console.log(JSON.stringify(this.playersAvailable));
		});
		this.playersSelected = [];
	}

	splitTeams() {
		this.teams = this.teamSplitterService.splitTeams(this.playersSelected);
		this.lightTeam = this.teams?.[0];
		this.darkTeam = this.teams?.[1];
	}

	deletePlayer(player: Player) {
		console.log('holi ' + player.name);
		
		this.editPlayerService.deletePlayer(player);
	}

	// const teams = this.splitTeams(players);
}
