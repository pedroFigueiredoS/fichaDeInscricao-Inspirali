import InscricaoEnem from '../support/pages/ContestEnem/index';

describe('Teste de ficha de inscrição - Dinâmico por ambiente', () => {
  const concursoId = Cypress.env('concurso') || 16403;

  beforeEach(() => {
    cy.visit(`/concurso/${concursoId}`, {
      failOnStatusCode: false // essencial nesse caso
    });
  });

  it('Inscrição com sucesso', () => {
    InscricaoEnem.completeTheApplicationStarted();
    InscricaoEnem.personalinformation();
    InscricaoEnem.Additionaldata();
    InscricaoEnem.Entrydetails();
    InscricaoEnem.Finish();
  });
});
