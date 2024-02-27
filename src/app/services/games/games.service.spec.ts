import { TestBed } from '@angular/core/testing';

import { GamesService } from './games.service';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GameDetailed } from '../../interfaces/game-detailed';
import { Game } from '../../interfaces/game';

describe('GamesService', () => {
  let service: GamesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GamesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoult retrieve games from the API via GET', () => {
    const dummyGames = [
      {
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
      },
      {
        id: 2,
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
      },
    ];

    service.getAllGames().subscribe((games) => {
      expect(games.length).toBe(2);
      expect(games).toEqual(dummyGames);
    });

    const req = httpMock.expectOne(
      'http://localhost:4123/https://www.freetogame.com/api/games'
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyGames);
  });

  it('should retrieve detailed game information by ID via GET', () => {
    const dummyGameId = 1;
    const dummyGameDetailed: GameDetailed = {
      id: 1,
      title: 'Game Title',
      thumbnail: 'game-thumbnail.jpg',
      status: 'Game Status',
      short_description: 'Game short description',
      description: 'Game description',
      game_url: 'game-url',
      genre: 'Game Genre',
      platform: 'Game Platform',
      publisher: 'Game Publisher',
      developer: 'Game Developer',
      release_date: 'Game Release Date',
      freetogame_profile_url: 'game-profile-url',
      minimum_system_requirements: {
        os: 'OS',
        processor: 'Processor',
        memory: 'Memory',
        graphics: 'Graphics',
        storage: 'Storage',
      },
      screenshots: [
        {
          id: 1,
          image: 'screenshot1.jpg',
        },
        {
          id: 2,
          image: 'screenshot2.jpg',
        },
      ],
    };

    service.getGameById(dummyGameId).subscribe((game) => {
      expect(game).toEqual(dummyGameDetailed);
    });

    const req = httpMock.expectOne(
      `http://localhost:4123/https://www.freetogame.com/api/game?id=${dummyGameId}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyGameDetailed);
  });

  it('should retrieve games sorted by a given criterion via GET', () => {
    const sortCriterion = 'popularity';
    const dummySortedGames: Game[] = [
      {
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
      },
      {
        id: 2,
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
      },
    ];

    service.getGamesSortedBy(sortCriterion).subscribe((games) => {
      expect(games.length).toBe(2);
      expect(games).toEqual(dummySortedGames);
    });

    const req = httpMock.expectOne(
      `http://localhost:4123/https://www.freetogame.com/api/games?sort-by=${sortCriterion}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummySortedGames);
  });
});
