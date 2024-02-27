import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../interfaces/game';

@Pipe({
  name: 'filterGame',
})
export class FilterGamePipe implements PipeTransform {
  transform(
    games: Game[],
    genre: string,
    platform: string,
    release_year: string
  ): Game[] {
    if (!games) {
      return [];
    }
    if (!genre && !platform && !release_year) {
      return games;
    }
    return games.filter((game) => {
      if (genre && game.genre !== genre) {
        return false;
      }
      if (platform && game.platform !== platform) {
        return false;
      }
      if (release_year && game.release_date.split('-')[0] !== release_year) {
        return false;
      }
      return true;
    });
  }
}
