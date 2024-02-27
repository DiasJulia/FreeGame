import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games/games.service';
import { GameDetailed } from '../../interfaces/game-detailed';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.scss',
})
export class GameDetailComponent {
  private id: string = '';
  public game: GameDetailed | undefined;

  constructor(
    private route: ActivatedRoute,
    private gameService: GamesService
  ) {
    this.id = this.route.snapshot.params['id'];
    this.gameService
      .getGameById(Number(this.id))
      .subscribe((data: GameDetailed) => {
        this.game = data;
      });
  }
}
