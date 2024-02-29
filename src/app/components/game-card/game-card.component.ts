import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game';
import { FavoriteGamesService } from '../../services/favorite-games/favorite-games.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent implements OnInit {
  @Input() game!: Game;

  public isFavorite = false;

  constructor(public favoriteGamesService: FavoriteGamesService) {}

  public toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.favoriteGamesService.addFavoriteGame(this.game.id);
    } else {
      this.favoriteGamesService.removeFavoriteGame(this.game.id);
    }
  }

  ngOnInit() {
    this.isFavorite = this.favoriteGamesService.isFavorite(this.game.id);
  }
}
