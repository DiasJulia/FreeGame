describe('Filtro da página de jogos', () => {
  it('deve permitir filtrar a lista de jogos por plataforma', () => {
    cy.visit('http://localhost:4200/').then(() => {
      cy.get('#platform-filter').select('PC');

      cy.get('.game-card').each((jogo) => {
        cy.wrap(jogo).within(() => {
          cy.get('.plataforma').should('contain.text', 'PC (Windows)');
        });
      });
    });
  });

  it('deve permitir filtrar a lista de jogos por ano de lançamento', () => {
    cy.visit('http://localhost:4200/');

    cy.get('#release-year-filter').select('2023');

    cy.get('.game-card').each((jogo) => {
      cy.wrap(jogo).within(() => {
        cy.get('a').click();
      });
    });

    cy.url().should('include', '/game/');
    cy.get('.info').should('contain.text', '2020');
  });

  it('deve permitir filtrar a lista de jogos por categoria', () => {});

  it('deve permitir filtrar os jogos por desenvolvedor', () => {});

  it('deve permitir filtrar os jogos por categoria e plataforma', () => {});
});
