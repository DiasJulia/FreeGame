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

  ngOnInit() {
    this.gameService.getAllGames().subscribe((data: Game[]) => {
      this.games = data;
    });
  }
}
