import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { FavoriteListComponent } from './pages/favorite-list/favorite-list.component';

const routes: Routes = [
  {
    path: '',
    component: GameListComponent,
  },
  {
    path: 'favorite',
    component: FavoriteListComponent,
  },
  {
    path: 'game/:id',
    component: GameDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
