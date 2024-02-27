import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games/games.service';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss',
})
export class GameListComponent implements OnInit {
  constructor(private gameService: GamesService) {}

  public games: Game[] = [];
  public genres = new Set<string>();
  public platforms = new Set<string>();
  public years: number[] = [...Array(2022 - 1970).keys()]
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

  ngOnInit() {
    this.gameService.getAllGames().subscribe((data: Game[]) => {
      this.games = data;
      this.games.forEach((game) => {
        this.genres.add(game.genre);
        this.platforms.add(game.platform);
      });
    });
  }
}
