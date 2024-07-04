import { Component, OnInit } from '@angular/core';
import { EditPlayerService } from '../shared/services/edit-player.service';
import { Player } from '../shared/dtos/player.dto';

@Component({
	selector: 'app-edit-player',
	templateUrl: './edit-player.component.html',
	styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

	player: Player = new Player();

	players!: Player[];

	positions!: any[];

	constructor(private editPlayerService: EditPlayerService) {

	}
	ngOnInit(): void {
		this.positions = [{ name: 'Goalkeeper', code: 'Goalkeeper' }, { name: 'Defender', code: 'Defender' }, { name: 'Forward', code: 'Forward' }];
		this.editPlayerService.getPlayers().subscribe(playersBin => {
			this.players = playersBin.players;
		});
	}

	addPlayer() {
		this.editPlayerService.addPlayer(this.player).subscribe(result => {
			console.log('Player successfully added!');
			this.player = new Player();
			this.players = result.players;
		});
	}

	deletePlayer(player: Player) {
		this.editPlayerService.deletePlayer(player).subscribe(result => {
			console.log('Player successfully deleted!');
			this.players = result.players;
		});;
	}
}