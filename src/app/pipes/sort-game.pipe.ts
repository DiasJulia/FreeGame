import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../interfaces/game';

@Pipe({
  name: 'sortGame',
})
export class SortGamePipe implements PipeTransform {
  transform(games: Game[], criterion: string, direction: string): Game[] {
    if (!games) {
      return [];
    }
    if (!criterion) {
      return games;
    }
    const sorted = games.sort((a, b) => {
      if (criterion === 'title') {
        return a.title.localeCompare(b.title);
      }
      if (criterion === 'release_date') {
        return a.release_date.localeCompare(b.release_date);
      }
      return 0;
    });
    return direction === 'asc' ? sorted : sorted.reverse();
  }
}
