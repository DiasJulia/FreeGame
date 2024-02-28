import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteListComponent } from './favorite-list.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { GameCardComponent } from '../../components/game-card/game-card.component';

describe('FavoriteListComponent', () => {
  let component: FavoriteListComponent;
  let fixture: ComponentFixture<FavoriteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteListComponent, NavbarComponent, GameCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
