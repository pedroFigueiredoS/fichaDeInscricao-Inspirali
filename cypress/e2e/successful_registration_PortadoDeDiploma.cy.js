import InscricaoPortadorDeDiploma from '../support/pages/ContestPortadorDeDiploma/index';

describe('Teste de ficha de inscrição - Dinâmico por ambiente', () => {
  const concursoId = Cypress.env('concurso') || 16424;

  beforeEach(() => {
    cy.visit(`/concurso/${concursoId}`, {
      failOnStatusCode: false // essencial nesse caso
    });
  });

  it('Inscrição com sucesso', () => {
    InscricaoPortadorDeDiploma.completeTheApplicationStarted();
    InscricaoPortadorDeDiploma.personalinformation();
    InscricaoPortadorDeDiploma.Additionaldata();
    InscricaoPortadorDeDiploma.Entrydetails();
    InscricaoPortadorDeDiploma.Finish();
  });
});
