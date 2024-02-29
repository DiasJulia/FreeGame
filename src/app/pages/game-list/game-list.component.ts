import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games/games.service';
import { Game } from '../../interfaces/game';
import { ActivatedRoute } from '@angular/router';
import { FavoriteGamesService } from '../../services/favorite-games/favorite-games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss',
})
export class GameListComponent implements OnInit {
  public showFavorites = false;
  public favoriteGames: number[] = [];

  constructor(
    private gameService: GamesService,
    private favoriteGamesService: FavoriteGamesService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.showFavorites = params['show'] === 'favorites';
    });
  }

  public games: Game[] = [];
  public genres = new Set<string>();
  public platforms = new Set<string>();
  public years: number[] = [...Array(2024 - 1970).keys()]
    .map((i) => i + 1970)
    .reverse();

  public filterGames = '';
  public filterGenre = '';
  public filterPlatform = '';
  public filterYear = '';

  public sortCriterion = 'default';

  public sortGames() {
    if (this.sortCriterion === 'default') {
      this.gameService.getAllGames().subscribe((data: Game[]) => {
        this.games = data;
      });
    }
    this.gameService
      .getGamesSortedBy(this.sortCriterion)
      .subscribe((data: Game[]) => {
        this.games = data;
      });
  }

  public getGames() {
    return this.showFavorites
      ? this.games.filter((game) => this.favoriteGames.includes(game.id))
      : this.games;
  }

  ngOnInit() {
    this.favoriteGames = this.favoriteGamesService.getFavoriteGames();
    this.gameService.getAllGames().subscribe((data: Game[]) => {
      this.games = data;
      this.games.forEach((game) => {
        this.genres.add(game.genre);
        this.platforms.add(game.platform);
      });
    });
  }
}
