import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardComponent } from './game-card.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FavoriteGamesService } from '../../services/favorite-games/favorite-games.service';
import { RouterLink } from '@angular/router';

class ActivatedRouteStub {
  snapshot = {
    params: {
      id: 1,
    },
  };
}

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;
  let favoriteGamesService: FavoriteGamesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterLink],
      declarations: [GameCardComponent],
      providers: [
        FavoriteGamesService,
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;
    favoriteGamesService = TestBed.inject(FavoriteGamesService);

    component.game = {
      id: 1,
      title: 'Game Title',
      thumbnail: 'game-thumbnail.jpg',
      short_description: 'Game short description',
      game_url: 'game-url',
      genre: 'Game Genre',
      platform: 'Game Platform',
      publisher: 'Game Publisher',
      developer: 'Game Developer',
      release_date: 'Game Release Date',
      freetogame_profile_url: 'game-profile-url',
    };
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display game title', () => {
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.card-title');
    expect(title.textContent).toContain('Game Title');
  });

  it('should display game thumbnail', () => {
    fixture.detectChanges();
    const thumbnail = fixture.nativeElement.querySelector('.thumbnail');
    expect(thumbnail.src).toContain('game-thumbnail.jpg');
  });

  it('should favorite game', () => {
    component.isFavorite = false;
    favoriteGamesService.removeFavoriteGame(component.game.id);
    spyOn(favoriteGamesService, 'addFavoriteGame'); // Espionar o método addFavoriteGame

    fixture.detectChanges();
    const favoriteButton = fixture.nativeElement.querySelector('.favorite');
    favoriteButton.click();

    expect(component.isFavorite).toBeTrue();
    expect(favoriteGamesService.addFavoriteGame).toHaveBeenCalledWith(
      component.game.id
    );
  });

  it('should unfavorite game', () => {
    component.isFavorite = true;
    favoriteGamesService.addFavoriteGame(component.game.id);
    spyOn(favoriteGamesService, 'removeFavoriteGame');

    fixture.detectChanges();
    const favoriteButton = fixture.nativeElement.querySelector('.favorite');
    favoriteButton.click();

    expect(component.isFavorite).toBeFalse();
    expect(favoriteGamesService.removeFavoriteGame).toHaveBeenCalledWith(
      component.game.id
    );
  });
});
