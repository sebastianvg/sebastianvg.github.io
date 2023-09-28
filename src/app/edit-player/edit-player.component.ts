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

	positions!: any[];

	constructor(private editPlayerService: EditPlayerService) {

	}
	ngOnInit(): void {
		this.positions = [{ name: 'Goalkeeper', code: 'Goalkeeper' }, { name: 'Back', code: 'Back' }, { name: 'Forward', code: 'Forward' }];
	}

	addPlayer() {
		this.editPlayerService.addPlayer(this.player).subscribe(result => {
			console.log('Player successfully added!');
			console.log(JSON.stringify(result));
			this.player = new Player();
		});
	}
}