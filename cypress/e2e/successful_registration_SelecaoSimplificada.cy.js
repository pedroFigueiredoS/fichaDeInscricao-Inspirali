import InscricaoSelecaoSimplificada from '../support/pages/ContestSelecaoSimplificada/index';

describe('Teste de ficha de inscrição - Dinâmico por ambiente', () => {
  const concursoId = Cypress.env('concurso') || 16423;

  beforeEach(() => {
    cy.visit(`/concurso/${concursoId}`, {
      failOnStatusCode: false // essencial nesse caso
    });
  });

  it('Inscrição com sucesso', () => {
    InscricaoSelecaoSimplificada.completeTheApplicationStarted();
    InscricaoSelecaoSimplificada.personalinformation();
    InscricaoSelecaoSimplificada.Additionaldata();
    InscricaoSelecaoSimplificada.Entrydetails();
    InscricaoSelecaoSimplificada.Finish();
  });
});
