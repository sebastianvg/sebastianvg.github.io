import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../shared/services/dashboard.service';
import { QuoteResponse } from '../shared/dtos/quote-response.dto';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	quoteResponse!: QuoteResponse;

	constructor(private dashboardService: DashboardService) {
	}

	ngOnInit(): void {
		this.getRandomQuote();
	}

	private getRandomQuote() {
		this.dashboardService.getQuote().subscribe(quoteRes => {
			if (quoteRes && quoteRes.length > 0) {
				let quote = quoteRes[0];
				this.quoteResponse = quote;
			}
		})
	}
}