describe('Página de jogos', () => {
  it('deve exibir uma lista de jogos com nome, capa e plataforma', () => {
    cy.visit('http://localhost:4200/');

    cy.get('.game-list').should('exist');

    cy.get('.game-card').should('have.length.greaterThan', 0);

    cy.get('.game-card').each((jogo) => {
      cy.wrap(jogo).within(() => {
        cy.get('.card-title').should('exist');
        cy.get('.thumbnail').should('exist');
        // cy.get('.plataforma-do-jogo').should('exist');
      });
    });
  });

  it('deve permitir navegar para a página de detalhes de um jogo', () => {
    cy.visit('http://localhost:4200/');

    cy.get('.game-card')
      .first()
      .within(() => {
        cy.get('.card-title').invoke('text').as('nomeDoJogo');
        cy.get('a').click();
      })
      .then(() => {
        cy.url().should('include', '/game/');
        cy.get('@nomeDoJogo').then((nomeDoJogo) => {
          cy.get('h1').should('contain.text', nomeDoJogo);
        });
      });
  });

  it('deve permitir favoritar um jogo', () => {
    cy.visit('http://localhost:4200/');

    cy.get('.game-card')
      .first()
      .within(() => {
        cy.get('.card-title').invoke('text').as('nomeDoJogo');
        cy.get('.favorite').click();
      });
    656;

    cy.visit('http://localhost:4200/favorites');
    cy.get('.game-card').should('have.length.greaterThan', 0);

    cy.get('.game-card').each((jogo) => {
      cy.wrap(jogo).within(() => {
        cy.get('@nomeDoJogo').then((nomeDoJogo) => {
          cy.get('.card-title').should('contain.text', nomeDoJogo);
        });
      });
    });
  });

  it('deve permitir filtrar a lista de jogos por plataforma', () => {});

  it('deve permitir filtrar a lista de jogos por ano de lançamento', () => {});

  it('deve permitir filtrar a lista de jogos por categoria', () => {});

  it('deve permitir filtrar os jogos por desenvolvedor', () => {});

  it('deve permitir filtrar os jogos por categoria e plataforma', () => {});
});
