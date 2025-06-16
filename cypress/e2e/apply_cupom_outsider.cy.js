import InscricaoTransferenciaExterna from '../support/pages/ContestTransferenciaExterna/index';
import recoveryProcess from '../support/pages/recoveryprocess/index';

describe('Teste de ficha de inscrição - Dinâmico por ambiente', () => {
    const concursoId = Cypress.env('concurso') || 16557;

    beforeEach(() => {
        cy.visit(`/concurso/${concursoId}`, {
            failOnStatusCode: false // essencial nesse caso
        });
    });

    it('Aplicando CUPOM MED50 - Recuperação da ficha', () => {
        InscricaoTransferenciaExterna.completeTheApplicationStarted();
        InscricaoTransferenciaExterna.personalinformation();
        InscricaoTransferenciaExterna.Additionaldata();
        InscricaoTransferenciaExterna.Entrydetails();
        cy.intercept('PUT', '**/api/Enrollment/Finish/**').as('finalizarInscricao');
        InscricaoTransferenciaExterna.Finish();
        cy.wait('@finalizarInscricao');
        cy.reload()
        recoveryProcess.recoveryProcessEmail();
        recoveryProcess.applyCupomRecovery();
        cy.get('.insp-input__input')
            .should('be.visible')
            .type('MED50')

        cy.intercept('GET', '**/api/Enrollment/promocode/**').as('applyCoupon');
        cy.wait('@applyCoupon'); 

        cy.get('.btn > span')
            .should('be.visible')
            .and('include.text', 'Finalizar a inscrição')
            .click();

        // Assert Banco de dados 

        const cpfComPontuacao = Cypress.env('cpfGerado');
        const cpfSemPontuacao = cpfComPontuacao.replace(/\D/g, ''); // Remove tudo que não for número

        cy.task('queryDB', {
            query: `
     SELECT *
     FROM atr_fichainscricao."PaymentDetails"
     WHERE "CandidateId" IN (
       SELECT "CandidateId"
       FROM atr_fichainscricao."CandidateDatas"
       WHERE "Cpf" = $1
     )
     ORDER BY "DateCreated" DESC
     LIMIT 1;
   `,
            values: [cpfSemPontuacao]

        }).then((result) => {
            expect(result).to.have.length.above(0);
            expect(result[0].Coupon).to.eq('MED50');
        });
    });

    it('Aplicando CUPOM MED100 - Recuperação da ficha', () => {
        InscricaoTransferenciaExterna.completeTheApplicationStarted();
        InscricaoTransferenciaExterna.personalinformation();
        InscricaoTransferenciaExterna.Additionaldata();
        InscricaoTransferenciaExterna.Entrydetails();
        cy.intercept('PUT', '**/api/Enrollment/Finish/**').as('finalizarInscricao');
        InscricaoTransferenciaExterna.Finish();
        cy.wait('@finalizarInscricao');
        cy.reload()
        recoveryProcess.recoveryProcessEmail();
        recoveryProcess.applyCupomRecovery();
        cy.get('.insp-input__input')
            .should('be.visible')
            .type('MED100')

         cy.intercept('GET', '**/api/Enrollment/promocode/**').as('applyCoupon');
         cy.wait('@applyCoupon'); 

         cy.get('.btn > span')
             .should('be.visible')
             .and('include.text', 'Finalizar a inscrição')
             .click();

         // Assert Banco de dados 

         const cpfComPontuacao = Cypress.env('cpfGerado');
         const cpfSemPontuacao = cpfComPontuacao.replace(/\D/g, ''); // Remove tudo que não for número

         cy.task('queryDB', {
             query: `
      SELECT *
      FROM atr_fichainscricao."PaymentDetails"
      WHERE "CandidateId" IN (
        SELECT "CandidateId"
        FROM atr_fichainscricao."CandidateDatas"
        WHERE "Cpf" = $1
      )
      ORDER BY "DateCreated" DESC
      LIMIT 1;
    `,
             values: [cpfSemPontuacao]

         }).then((result) => {
             expect(result).to.have.length.above(0);
             expect(result[0].Coupon).to.eq('MED100');
         });

        cy.get('.registration-form__title-gray')
            .should('be.visible')
            .and('include.text', 'Inscrição realizada com sucesso!');
    });

    it('Aplicando CUPOM MED70 - Recuperação da ficha', () => {
        InscricaoTransferenciaExterna.completeTheApplicationStarted();
        InscricaoTransferenciaExterna.personalinformation();
        InscricaoTransferenciaExterna.Additionaldata();
        InscricaoTransferenciaExterna.Entrydetails();
        cy.intercept('PUT', '**/api/Enrollment/Finish/**').as('finalizarInscricao');
        InscricaoTransferenciaExterna.Finish();
        cy.wait('@finalizarInscricao');
        cy.reload()
        recoveryProcess.recoveryProcessEmail();
        recoveryProcess.applyCupomRecovery();
        cy.get('.insp-input__input')
            .should('be.visible')
            .type('MED70')

         cy.intercept('GET', '**/api/Enrollment/promocode/**').as('applyCoupon');
         cy.wait('@applyCoupon'); 

         cy.get('.btn > span')
             .should('be.visible')
             .and('include.text', 'Finalizar a inscrição')
             .click();

         // Assert Banco de dados 

         const cpfComPontuacao = Cypress.env('cpfGerado');
         const cpfSemPontuacao = cpfComPontuacao.replace(/\D/g, ''); // Remove tudo que não for número

         cy.task('queryDB', {
             query: `
      SELECT *
      FROM atr_fichainscricao."PaymentDetails"
      WHERE "CandidateId" IN (
        SELECT "CandidateId"
        FROM atr_fichainscricao."CandidateDatas"
        WHERE "Cpf" = $1
      )
      ORDER BY "DateCreated" DESC
      LIMIT 1;
    `,
             values: [cpfSemPontuacao]

         }).then((result) => {
             expect(result).to.have.length.above(0);
             expect(result[0].Coupon).to.eq('MED70');
         });

    });
});

