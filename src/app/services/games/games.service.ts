import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  baseUrl = 'http://localhost:4123/https://www.freetogame.com/api/';

  constructor(private http: HttpClient) {}

  public getAllGames() {
    return this.http.get(this.baseUrl + 'games');
  }
}
