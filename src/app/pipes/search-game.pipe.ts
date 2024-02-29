import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../interfaces/game';

@Pipe({
  name: 'searchGame',
})
export class SearchGamePipe implements PipeTransform {
  transform(games: Game[], arg: string): Game[] {
    if (arg === '') {
      return games;
    }
    const resultGames = [];
    for (const game of games) {
      if (game.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultGames.push(game);
      }
    }
    return resultGames;
  }
}
