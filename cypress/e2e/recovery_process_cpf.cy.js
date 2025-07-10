import InscricaoEnem from '../support/pages/ContestEnem/index';
import recoveryProcess from '../support/pages/recoveryprocess/index';

describe('Teste de ficha de inscrição - Dinâmico por ambiente', () => {
  const concursoId = Cypress.env('concurso') || 16403;

  beforeEach(() => {
    cy.visit(`/concurso/${concursoId}`, {
      failOnStatusCode: false // essencial nesse caso
    });
  });

  it.only('Recuperação Ficha Primeira Etapa CPF', () => {
    InscricaoEnem.completeTheApplicationStarted();
    InscricaoEnem.personalinformation();
    cy.reload();
    recoveryProcess.recoveryProcessCPF();
    recoveryProcess.ReviewAndCompleteApplication();
    cy.get('#cep > label')
      .should('be.visible')
      .and('have.text', 'CEP');

  });

  it('Recuperação Ficha Segunda Etapa CPF', () => {
    InscricaoEnem.completeTheApplicationStarted();
    InscricaoEnem.personalinformation();
    InscricaoEnem.Additionaldata();
    cy.reload();
    recoveryProcess.recoveryProcessCPF();
    recoveryProcess.ReviewAndCompleteApplication();
    cy.get('.insp-radio > :nth-child(2)')
      .should('be.visible')

  });

  it('Recuperação Ficha Terceira Etapa CPF', () => {
    InscricaoEnem.completeTheApplicationStarted();
    InscricaoEnem.personalinformation();
    InscricaoEnem.Additionaldata();
    InscricaoEnem.Entrydetails();
    cy.reload();
    recoveryProcess.recoveryProcessCPF();
    recoveryProcess.ReviewAndCompleteApplication();
    cy.get('.insp-radio > :nth-child(2)')
      .should('be.visible')

  });

  it('Recuperação Ficha Finalizado Etapa CPF', () => {
    InscricaoEnem.completeTheApplicationStarted();
    InscricaoEnem.personalinformation();
    InscricaoEnem.Additionaldata();
    InscricaoEnem.Entrydetails();
    // Intercepta ANTES de disparar a ação
    cy.intercept('PUT', '**/api/Enrollment/Finish/**').as('finalizarInscricao');
    InscricaoEnem.Finish();
    cy.wait('@finalizarInscricao');
    cy.reload();
    recoveryProcess.recoveryProcessCPF();
  });

})