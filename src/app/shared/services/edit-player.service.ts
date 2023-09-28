import { Injectable } from '@angular/core';
import { Player } from '../dtos/player.dto';
import { PlayersBin } from '../dtos/players-bin.dto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class EditPlayerService {

	playersBin: PlayersBin = new PlayersBin();


	constructor(private http: HttpClient) {
		this.getPlayers().subscribe(response => {
			this.playersBin = response;
			console.log(JSON.stringify(this.playersBin));
		});
	}

	addPlayer(player: Player): Observable<PlayersBin> {
		this.playersBin.players.push(player);
		return this.updatePlayersList();
	}

	getPlayers(): Observable<PlayersBin> {
		let headers = new HttpHeaders();
		headers = headers.set('Content-Type', 'application/json; charset=utf-8')
			.set('X-Master-Key', '$2a$10$tfHxapIX1Zh4/RqYB7R.muTY5ICCMANvBdYU.GOujj0lOR9w3M5fu')
			.set('X-Bin-Meta', 'false');


		return this.http.get<PlayersBin>('https://api.jsonbin.io/v3/b/651278a112a5d37659834d52', { headers });
	}

	updatePlayersList(): Observable<PlayersBin> {
		let headers = new HttpHeaders();
		headers = headers.set('Content-Type', 'application/json; charset=utf-8')
			.set('X-Master-Key', '$2a$10$tfHxapIX1Zh4/RqYB7R.muTY5ICCMANvBdYU.GOujj0lOR9w3M5fu')
			.set('X-Bin-Meta', 'false');

		return this.http.put<PlayersBin>('https://api.jsonbin.io/v3/b/651278a112a5d37659834d52', this.playersBin, { headers });
	}
}