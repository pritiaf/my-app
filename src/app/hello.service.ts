import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import map operator

// Define an interface for the backend response
interface HelloResponse {
	message: string;
}

@Injectable({
	providedIn: 'root',
})
export class HelloService {
	private apiUrl = 'http://localhost:3000/api/hello';

	constructor(private http: HttpClient) { }

	getHelloWorld(): Observable<string> {
		return this.http.get<HelloResponse>(this.apiUrl).pipe(
			map((response) => response.message) // Extract the message from the response
		);
	}
}
