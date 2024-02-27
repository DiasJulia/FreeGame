import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GameCardComponent } from './components/game-card/game-card.component';

@NgModule({
  declarations: [AppComponent, GameListComponent, GameCardComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
