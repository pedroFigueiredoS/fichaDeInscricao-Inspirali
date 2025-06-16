import InscricaoTransferenciaInterna from '../support/pages/ContestTransferenciaInterna/index.js';

describe('Teste de ficha de inscrição - Dinâmico por ambiente', () => {
  const concursoId = Cypress.env('concurso') || 16421;

  beforeEach(() => {
    cy.visit(`/concurso/${concursoId}`, {
      failOnStatusCode: false // essencial nesse caso
    });
  });

  it('CPF permitido Transferencia Interna', () => {
    InscricaoTransferenciaInterna.completeTheApplicationStarted();
    cy.get('.registration-identification-modal__button > .btn')
        .should('be.visible')
        .click();
    InscricaoTransferenciaInterna.cpfallowed();

    // Assert 
    cy.get('#name > .insp-input > .insp-input__wrapper > .insp-input__input')
      .should('be.visible')
      .and('have.value', 'Gabriel de Andrade Paulino');

    cy.get('#email > .insp-input__wrapper > .insp-input__input')
      .should('be.visible')
      .and('have.value', 'gabriel.paulinomed9@gmail.com');

    cy.get('#phoneNumber > .insp-input__wrapper > .insp-input__input')
      .should('be.visible')
      .and('have.value', '(24) 99850-9634');
    
      cy.get('#birthDate > .insp-input > .insp-input__wrapper > .insp-input__input')
      .should('be.visible')
      .and('have.value', '04/07/1997');

  });

  it('CPF não permitido Transferencia Interna', () => {
    InscricaoTransferenciaInterna.completeTheApplicationStarted();
    cy.get('.registration-identification-modal__button > .btn')
        .should('be.visible')
        .click();
    InscricaoTransferenciaInterna.cpfnotallowed();
    cy.get('.registration-modal__description')
      .should('be.visible')
      .contains('Este processo é exclusivo para estudantes do curso de Medicina da Instituição que estejam com o status "Ativo" no curso. Infelizmente, você não se enquadra nos requisitos necessários para participar.');
    cy.get('.registration-modal__button > .btn')
      .should('be.visible')
      .and('have.text', 'Entendi')
  });

  it('Falha na busca de CPF Transferencia Interna', () => {
    // Intercepta a requisição de validação de CPF e simula um erro 500
    cy.intercept({
      method: 'GET',
      pathname: '/atr-ficha-inscricao-api/api/Enrollment/validateCpf',
    }, {
      statusCode: 500,
      body: { error: 'Erro interno no servidor' },
    }).as('validateCpf');

    InscricaoTransferenciaInterna.completeTheApplicationStarted();
    cy.get('.registration-identification-modal__button > .btn')
        .should('be.visible')
        .click();
    InscricaoTransferenciaInterna.cpfnotallowed();

    cy.wait('@validateCpf');

    // Assert 

    cy.get('.registration-error__contenet > :nth-child(1)')
      .should('be.visible')
      .contains('Não conseguimos localizar sua matrícula neste momento. Para continuar, é necessário que sua matrícula seja validada.');

  });

});



