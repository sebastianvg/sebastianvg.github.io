import { Player } from "./player.dto";

export class PlayersBin {
	players!: Player[];

	constructor() {
		this.players = [];
	}
}