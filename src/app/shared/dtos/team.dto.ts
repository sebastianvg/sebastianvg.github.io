import { Player } from "./player.dto";

export type Team = {
	name: string;
	players: Player[];
	level: number;
};