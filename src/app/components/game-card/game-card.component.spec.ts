import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardComponent } from './game-card.component';
import { HttpClientModule } from '@angular/common/http';

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [GameCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
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

    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
