import { Injectable } from '@angular/core';
import { Game } from '../../interfaces/game';

@Injectable({
  providedIn: 'root',
})
export class FavoriteGamesService {
  public getFavoriteGames(): Game[] {
    const favoriteGamesJSON = sessionStorage.getItem('favoriteGames');
    return favoriteGamesJSON ? JSON.parse(favoriteGamesJSON) : [];
  }

  public addFavoriteGame(game: Game) {
    const favoriteGames = this.getFavoriteGames();
    favoriteGames.push(game);
    sessionStorage.setItem('favoriteGames', JSON.stringify(favoriteGames));
  }

  public removeFavoriteGame(gameId: number) {
    let favoriteGames = this.getFavoriteGames();
    favoriteGames = favoriteGames.filter((game) => game.id !== gameId);
    sessionStorage.setItem('favoriteGames', JSON.stringify(favoriteGames));
  }

  public isFavorite(gameId: number): boolean {
    const favoriteGames = this.getFavoriteGames();
    return favoriteGames.some((game) => game.id === gameId);
  }
}
