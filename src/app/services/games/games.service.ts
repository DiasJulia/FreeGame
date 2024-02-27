import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../../interfaces/game';
import { GameDetailed } from '../../interfaces/game-detailed';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  baseUrl = 'http://localhost:4123/https://www.freetogame.com/api/';

  constructor(private http: HttpClient) {}

  public getAllGames() {
    return this.http.get<Game[]>(`${this.baseUrl}games`);
  }

  public getGameById(id: number) {
    return this.http.get<GameDetailed>(`${this.baseUrl}game?id=${id}`);
  }

  public getGamesSortedBy(sortCriterion: string) {
    return this.http.get<Game[]>(
      `${this.baseUrl}games?sort-by=${sortCriterion}`
    );
  }
}
