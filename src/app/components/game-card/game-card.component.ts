import { Component, Input } from '@angular/core';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  @Input() game!: Game;

  public isFavorite = false;

  constructor() {}

  public toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
