import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../dtos/player.dto';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';
import { PlayersBin } from '../dtos/players-bin.dto';
import { Team } from '../dtos/team.dto';

@Injectable({
	providedIn: 'root'
})
export class TeamSplitterService {

	constructor(private http: HttpClient) { }

	getPlayersList(): Observable<Player[]> {
		let headers = new HttpHeaders();
		headers = headers.set('Content-Type', 'application/json; charset=utf-8')
			.set('X-Master-Key', '$2a$10$tfHxapIX1Zh4/RqYB7R.muTY5ICCMANvBdYU.GOujj0lOR9w3M5fu')
			.set('X-Bin-Meta', 'false');


		return this.http.get<PlayersBin>('https://api.jsonbin.io/v3/b/651278a112a5d37659834d52', { headers }).pipe(map(data => data.players));
	}

	splitTeams(players: Player[]): [Team, Team] | null {
		// Separate players by position
		const goalkeepers = players.filter(player => player.position === 'Goalkeeper');
		const defenders = players.filter(player => player.position === 'Defender');
		const forwards = players.filter(player => player.position === 'Forward');

		// Check that there are at least two goalkeepers, defenders, and forwards
		if (goalkeepers.length < 2 || defenders.length < 2 || forwards.length < 2) {
			console.log('No enough players in some of the positions (< 2)');
			
			return null;
		}

		// Shuffle players randomly
		const shuffledGoalkeepers = this.shuffleArray(goalkeepers);
		const shuffledDefenders = this.shuffleArray(defenders);
		const shuffledForwards = this.shuffleArray(forwards);

		// Sort players by level
		const sortedGoalkeepers = this.sortByLevel(shuffledGoalkeepers);
		const sortedDefenders = this.sortByLevel(shuffledDefenders);
		const sortedForwards = this.sortByLevel(shuffledForwards);

		// Create empty teams
		const team1: Team = {
			name: 'Team 1',
			players: [],
			level: 0
		};

		const team2: Team = {
			name: 'Team 2',
			players: [],
			level: 0
		};

		// Distribute players evenly by position and level
		let turn = 1;
		while (sortedGoalkeepers.length > 0 || sortedDefenders.length > 0 || sortedForwards.length > 0) {
			switch (turn) {
				case 1:
					if (sortedGoalkeepers.length > 0) {
						const player = sortedGoalkeepers.pop()!;
						team1.players.push(player);
						team1.level += player.level;
					} else if (sortedDefenders.length > 0) {
						const player = sortedDefenders.pop()!;
						team1.players.push(player);
						team1.level += player.level;
					} else if (sortedForwards.length > 0) {
						const player = sortedForwards.pop()!;
						team1.players.push(player);
						team1.level += player.level;
					}
					turn = 2;
					break;
				case 2:
					if (sortedGoalkeepers.length > 0) {
						const player = sortedGoalkeepers.pop()!;
						team2.players.push(player);
						team2.level += player.level;
					} else if (sortedDefenders.length > 0) {
						const player = sortedDefenders.pop()!;
						team2.players.push(player);
						team2.level += player.level;
					} else if (sortedForwards.length > 0) {
						const player = sortedForwards.pop()!;
						team2.players.push(player);
						team2.level += player.level;
					}
					turn = 1;
					break;
			}

			// Balance teams by level
			if (Math.abs(team1.level - team2.level) > 1) {
				const team1Diff = team1.level - team2.level;
				if (team1Diff > 0) {
					const player = team1.players.pop()!;
					team1.level -= player.level;
					team2.players.push(player);
					team2.level += player.level;
				} else {
					const player = team2.players.pop()!;
					team2.level -= player.level;
					team1.players.push(player);
					team1.level += player.level;
				}
			}
		}

		// Return teams
		return [team1, team2];
	}

	sortByLevel(players: Player[]): Player[] {
		return players.sort((a, b) => a.level - b.level);
	}

	shuffleArray<T>(array: T[]): T[] {
		const shuffledArray = [...array];
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
		}
		return shuffledArray;
	}
}