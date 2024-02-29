import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { FormsModule } from '@angular/forms';
import { FilterGamePipe } from './pipes/filter-game.pipe';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FavoriteListComponent } from './pages/favorite-list/favorite-list.component';
import { SearchGamePipe } from './pipes/search-game.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameCardComponent,
    FilterGamePipe,
    GameDetailComponent,
    NavbarComponent,
    FavoriteListComponent,
    SearchGamePipe,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
