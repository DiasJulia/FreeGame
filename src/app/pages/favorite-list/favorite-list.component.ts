import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game';
import { FavoriteGamesService } from '../../services/favorite-games/favorite-games.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.scss',
})
export class FavoriteListComponent implements OnInit {
  constructor(private favoriteGamesService: FavoriteGamesService) {}

  public games: Game[] = [];

  ngOnInit() {
    this.games = this.favoriteGamesService.getFavoriteGames();
  }
}
