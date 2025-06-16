import InscricaoTransferenciaExterna from '../support/pages/ContestTransferenciaExterna/index';

describe('Teste de ficha de inscrição - Dinâmico por ambiente', () => {
  const concursoId = Cypress.env('concurso') || 16557;

  beforeEach(() => {
    cy.visit(`/concurso/${concursoId}`, {
      failOnStatusCode: false // essencial nesse caso
    });
  });

  it('Inscrição com sucesso', () => {
    InscricaoTransferenciaExterna.completeTheApplicationStarted();
    InscricaoTransferenciaExterna.personalinformation();
    InscricaoTransferenciaExterna.Additionaldata();
    InscricaoTransferenciaExterna.Entrydetails();
    InscricaoTransferenciaExterna.Finish();
  });
});
