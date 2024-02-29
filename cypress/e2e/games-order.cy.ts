describe('Ordenamento de jogos', () => {
  before(() => {
    cy.window().then((win) => {
      win.localStorage.removeItem('favoriteGames');
    });
  });

  it('deve permitir ordenar a lista de jogos por nome', () => {
    cy.visit('http://localhost:4200/');

    cy.get('#sort-criterion')
      .select('alphabetical')
      .should('have.value', 'alphabetical')
      .wait(3000)
      .then(() => {
        cy.get('.game-card .card-title').then(($titles) => {
          const nomesDosJogos = $titles
            .map((index, element) => Cypress.$(element).text().toLowerCase())
            .get();

          const nomesDosJogosOrdenados = [...nomesDosJogos].sort();
          expect(nomesDosJogos).to.deep.equal(nomesDosJogosOrdenados);
        });
      });
  });
});
