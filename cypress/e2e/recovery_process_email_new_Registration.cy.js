import InscricaoTransferenciaExterna from '../support/pages/ContestTransferenciaExterna/index';
import recoveryProcess from '../support/pages/recoveryprocess/index';

describe('Teste de ficha de inscrição - Dinâmico por ambiente', () => {
    const concursoId = Cypress.env('concurso') || 16411;

    beforeEach(() => {
        cy.visit(`/concurso/${concursoId}`, {
            failOnStatusCode: false // essencial nesse caso
        });
    });

    it('Seguir com uma nova inscrição Ficha Primeira Etapa Email', () => {
        InscricaoTransferenciaExterna.completeTheApplicationStarted();
        InscricaoTransferenciaExterna.personalinformation();
        cy.reload();
        recoveryProcess.recoveryProcessEmail();
        recoveryProcess.ReviewAndCompleteApplicationNewRegistration();
        cy.get(':nth-child(1) > label')
            .should('be.visible')
            .and('have.text', 'Nome Completo');

    });

    it('Seguir com uma nova inscrição Ficha Segunda Etapa Email', () => {
        InscricaoTransferenciaExterna.completeTheApplicationStarted();
        InscricaoTransferenciaExterna.personalinformation();
        InscricaoTransferenciaExterna.Additionaldata();
        cy.reload();
        recoveryProcess.recoveryProcessEmail();
        recoveryProcess.ReviewAndCompleteApplicationNewRegistration();
        cy.get(':nth-child(1) > label')
            .should('be.visible')
            .and('have.text', 'Nome Completo');


    });

    it('Seguir com uma nova inscrição Ficha Terceira Etapa Email', () => {
        InscricaoTransferenciaExterna.completeTheApplicationStarted();
        InscricaoTransferenciaExterna.personalinformation();
        InscricaoTransferenciaExterna.Additionaldata();
        InscricaoTransferenciaExterna.Entrydetails();
        cy.reload();
        recoveryProcess.recoveryProcessEmail();
        recoveryProcess.ReviewAndCompleteApplicationNewRegistration();
        cy.get(':nth-child(1) > label')
            .should('be.visible')
            .and('have.text', 'Nome Completo');


    });
})