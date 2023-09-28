import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuoteResponse } from '../dtos/quote-response.dto';

@Injectable({
	providedIn: 'root'
})
export class DashboardService {

	constructor(private http: HttpClient) { }

	getQuote(): Observable<QuoteResponse[]> {
		return this.http.get<QuoteResponse[]>('https://thesimpsonsquoteapi.glitch.me/quotes');
	}
}
