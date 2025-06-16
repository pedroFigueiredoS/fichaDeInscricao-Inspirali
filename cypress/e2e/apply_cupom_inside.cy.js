import InscricaoTransferenciaExterna from '../support/pages/ContestTransferenciaExterna/index';

describe('Teste de ficha de inscrição - Dinâmico por ambiente', () => {
    const concursoId = Cypress.env('concurso') || 16557;

    beforeEach(() => {
        cy.visit(`/concurso/${concursoId}`, {
            failOnStatusCode: false // essencial nesse caso
        });
    });

    it('Aplicando CUPOM MED50', () => {
        InscricaoTransferenciaExterna.completeTheApplicationStarted();
        InscricaoTransferenciaExterna.personalinformation();
        InscricaoTransferenciaExterna.Additionaldata();
        InscricaoTransferenciaExterna.EntrydetailsApplyCupom();
        cy.get(':nth-child(9) > .insp-input > .insp-input__wrapper > .insp-input__input')
            .should('be.visible')
            .type('MED50');

        // Interceoptando a requisição para verificar o cupom
        cy.intercept('GET', '**/api/Enrollment/promocode/*?contestCode=*').as('verificaPromocode');
        cy.wait('@verificaPromocode').its('response.statusCode').should('eq', 200);
        cy.get('.btn > span').click();
        InscricaoTransferenciaExterna.Finish();

        // Assert Banco de dados 

        const cpfComPontuacao = Cypress.env('cpfGerado');
        const cpfSemPontuacao = cpfComPontuacao.replace(/\D/g, ''); // Remove tudo que não for número

//         cy.task('queryDB', {
//             query: `
//     SELECT *
//     FROM atr_fichainscricao."PaymentDetails"
//     WHERE "CandidateId" IN (
//       SELECT "CandidateId"
//       FROM atr_fichainscricao."CandidateDatas"
//       WHERE "Cpf" = $1
//     )
//     ORDER BY "DateCreated" DESC
//     LIMIT 1;
//   `,
//             values: [cpfSemPontuacao]

//         }).then((result) => {
//             expect(result).to.have.length.above(0);
//             expect(result[0].Coupon).to.eq('MED50');
//         });
    });

    it('Aplicando CUPOM MED100', () => {
        InscricaoTransferenciaExterna.completeTheApplicationStarted();
        InscricaoTransferenciaExterna.personalinformation();
        InscricaoTransferenciaExterna.Additionaldata();
        InscricaoTransferenciaExterna.EntrydetailsApplyCupom();
        cy.get(':nth-child(9) > .insp-input > .insp-input__wrapper > .insp-input__input')
            .should('be.visible')
            .type('MED100');

        // Interceoptando a requisição para verificar o cupom
        cy.intercept('GET', '**/api/Enrollment/promocode/*?contestCode=*').as('verificaPromocode');
        cy.wait('@verificaPromocode').its('response.statusCode').should('eq', 200);
        cy.get('.btn > span').click();
        InscricaoTransferenciaExterna.Finish();

        // Assert Banco de dados 

        const cpfComPontuacao = Cypress.env('cpfGerado');
        const cpfSemPontuacao = cpfComPontuacao.replace(/\D/g, ''); // Remove tudo que não for número

//         cy.task('queryDB', {
//             query: `
//     SELECT *
//     FROM atr_fichainscricao."PaymentDetails"
//     WHERE "CandidateId" IN (
//       SELECT "CandidateId"
//       FROM atr_fichainscricao."CandidateDatas"
//       WHERE "Cpf" = $1
//     )
//     ORDER BY "DateCreated" DESC
//     LIMIT 1;
//   `,
//             values: [cpfSemPontuacao]

        // }).then((result) => {
        //     expect(result).to.have.length.above(0);
        //     expect(result[0].Coupon).to.eq('MED100');
        // });
    });

    it('Aplicando CUPOM MED70', () => {
        InscricaoTransferenciaExterna.completeTheApplicationStarted();
        InscricaoTransferenciaExterna.personalinformation();
        InscricaoTransferenciaExterna.Additionaldata();
        InscricaoTransferenciaExterna.EntrydetailsApplyCupom();
        cy.get(':nth-child(9) > .insp-input > .insp-input__wrapper > .insp-input__input')
            .should('be.visible')
            .type('MED70');

        // Interceoptando a requisição para verificar o cupom
        cy.intercept('GET', '**/api/Enrollment/promocode/*?contestCode=*').as('verificaPromocode');
        cy.wait('@verificaPromocode').its('response.statusCode').should('eq', 200);
        cy.get('.btn > span').click();
        InscricaoTransferenciaExterna.Finish();

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