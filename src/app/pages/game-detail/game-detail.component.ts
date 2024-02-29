import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games/games.service';
import { GameDetailed } from '../../interfaces/game-detailed';
import { FavoriteGamesService } from '../../services/favorite-games/favorite-games.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.scss',
})
export class GameDetailComponent {
  private id: string = '';
  public game: GameDetailed | undefined;
  public isFavorite = false;

  constructor(
    private route: ActivatedRoute,
    private gameService: GamesService,
    public favoriteGamesService: FavoriteGamesService
  ) {
    this.id = this.route.snapshot.params['id'];
    this.gameService
      .getGameById(Number(this.id))
      .subscribe((data: GameDetailed) => {
        this.game = data;
      });
  }

  public toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    if (this.game) {
      if (this.isFavorite) {
        this.favoriteGamesService.addFavoriteGame(this.game.id);
      } else {
        this.favoriteGamesService.removeFavoriteGame(this.game.id);
      }
    }
  }
}
