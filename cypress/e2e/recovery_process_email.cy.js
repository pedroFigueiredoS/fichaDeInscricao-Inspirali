import InscricaoTransferenciaExterna from '../support/pages/ContestTransferenciaExterna/index';
import recoveryProcess from '../support/pages/recoveryprocess/index';

describe('Teste de ficha de inscrição - Dinâmico por ambiente', () => {
  const concursoId = Cypress.env('concurso') || 16557;

  beforeEach(() => {
    cy.visit(`/concurso/${concursoId}`, {
      failOnStatusCode: false // essencial nesse caso
    });
  });

  it('Recuperação Ficha Primeira Etapa Email', () => {
    InscricaoTransferenciaExterna.completeTheApplicationStarted();
    InscricaoTransferenciaExterna.personalinformation();
    cy.reload();
    recoveryProcess.recoveryProcessEmail();
    recoveryProcess.ReviewAndCompleteApplication();
    cy.get('#cep > label')
      .should('be.visible')
      .and('have.text', 'CEP');

  });

  it('Recuperação Ficha Segunda Etapa Email', () => {
    InscricaoTransferenciaExterna.completeTheApplicationStarted();
    InscricaoTransferenciaExterna.personalinformation();
    InscricaoTransferenciaExterna.Additionaldata();
    cy.reload();
    recoveryProcess.recoveryProcessEmail();
    recoveryProcess.ReviewAndCompleteApplication();
    cy.get('.insp-radio > :nth-child(2)')
      .should('be.visible')

  });

  it('Recuperação Ficha Terceira Etapa Email', () => {
    InscricaoTransferenciaExterna.completeTheApplicationStarted();
    InscricaoTransferenciaExterna.personalinformation();
    InscricaoTransferenciaExterna.Additionaldata();
    InscricaoTransferenciaExterna.Entrydetails();
    cy.reload();
    recoveryProcess.recoveryProcessEmail();
    recoveryProcess.ReviewAndCompleteApplication();
    cy.get('.insp-radio > :nth-child(2)')
      .should('be.visible')

  });

  it('Recuperação Ficha Finalizado Etapa Email', () => {
    InscricaoTransferenciaExterna.completeTheApplicationStarted();
    InscricaoTransferenciaExterna.personalinformation();
    InscricaoTransferenciaExterna.Additionaldata();
    InscricaoTransferenciaExterna.Entrydetails();
    // Intercepta ANTES de disparar a ação
    cy.intercept('PUT', '**/api/Enrollment/Finish/**').as('finalizarInscricao');
    InscricaoTransferenciaExterna.Finish();
    cy.wait('@finalizarInscricao');
    cy.reload();
    recoveryProcess.recoveryProcessEmail();
  });

})