export class QuoteResponse {
	quote!: string;
	character!: string;
	image!: string;
	characterDirection!: string;

	constructor() {
		this.quote = '';
		this.character = '';
		this.image = '';
		this.characterDirection = '';
	}
}