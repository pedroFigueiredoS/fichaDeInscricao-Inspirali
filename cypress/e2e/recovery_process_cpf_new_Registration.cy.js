import InscricaoEnem from '../support/pages/ContestEnem/index';
import recoveryProcess from '../support/pages/recoveryprocess/index';

describe('Teste de ficha de inscrição - Dinâmico por ambiente', () => {
    const concursoId = Cypress.env('concurso') || 16403;

    beforeEach(() => {
        cy.visit(`/concurso/${concursoId}`, {
            failOnStatusCode: false // essencial nesse caso
        });
    });

    it('Seguir com uma nova inscrição Ficha Primeira Etapa CPF', () => {
        InscricaoEnem.completeTheApplicationStarted();
        InscricaoEnem.personalinformation();
        cy.reload();
        recoveryProcess.recoveryProcessCPF();
        recoveryProcess.ReviewAndCompleteApplicationNewRegistration();
        cy.get(':nth-child(1) > label')
            .should('be.visible')
            .and('have.text', 'Nome Completo');

    });

    it('Seguir com uma nova inscrição Ficha Segunda Etapa CPF', () => {
        InscricaoEnem.completeTheApplicationStarted();
        InscricaoEnem.personalinformation();
        InscricaoEnem.Additionaldata();
        cy.reload();
        recoveryProcess.recoveryProcessCPF();
        recoveryProcess.ReviewAndCompleteApplicationNewRegistration();
        cy.get(':nth-child(1) > label')
            .should('be.visible')
            .and('have.text', 'Nome Completo');

    });

    it('Seguir com uma nova inscrição Ficha Terceira Etapa CPF', () => {
        InscricaoEnem.completeTheApplicationStarted();
        InscricaoEnem.personalinformation();
        InscricaoEnem.Additionaldata();
        InscricaoEnem.Entrydetails();
        cy.reload();
        recoveryProcess.recoveryProcessCPF();
        recoveryProcess.ReviewAndCompleteApplicationNewRegistration();
        cy.get(':nth-child(1) > label')
            .should('be.visible')
            .and('have.text', 'Nome Completo');

    });

});

