import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoriteGamesService {
  public getFavoriteGames(): number[] {
    const favoriteGamesJSON = sessionStorage.getItem('favoriteGames');
    return favoriteGamesJSON ? JSON.parse(favoriteGamesJSON) : [];
  }

  public addFavoriteGame(gameId: number) {
    const favoriteGames = this.getFavoriteGames();
    favoriteGames.push(gameId);
    const uniqueFavoriteGames = favoriteGames.filter(
      (game, index, self) => index === self.findIndex((t) => t === game)
    );
    sessionStorage.setItem(
      'favoriteGames',
      JSON.stringify(uniqueFavoriteGames)
    );
  }

  public removeFavoriteGame(gameId: number) {
    const favoriteGames = this.getFavoriteGames();
    const index = favoriteGames.indexOf(gameId);
    if (index > -1) {
      favoriteGames.splice(index, 1);
    }
    sessionStorage.setItem('favoriteGames', JSON.stringify(favoriteGames));
  }

  public isFavorite(gameId: number): boolean {
    const favoriteGames = this.getFavoriteGames();
    return favoriteGames.includes(gameId);
  }
}
