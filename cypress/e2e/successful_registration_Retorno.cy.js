import InscricaoRetorno from '../support/pages/ContestRetorno/index.js';

describe('Teste de ficha de inscrição - Dinâmico por ambiente', () => {
  const concursoId = Cypress.env('concurso') || 16456;

  beforeEach(() => {
    cy.visit(`/concurso/${concursoId}`, {
      failOnStatusCode: false // essencial nesse caso
    });
  });

  it('CPF permitido Retorno', () => {
    InscricaoRetorno.completeTheApplicationStarted();
    cy.get('.registration-identification-modal__button > .btn')
        .should('be.visible')
        .click();
    InscricaoRetorno.cpfallowed();

    // Assert 
    cy.get('#name > .insp-input > .insp-input__wrapper > .insp-input__input')
      .should('be.visible')
      .and('have.value', 'Anderson Dabramo');

    cy.get('#email > .insp-input__wrapper > .insp-input__input')
      .should('be.visible')
      .and('have.value', 'andersondabramo@yahoo.com.br');

    cy.get('#phoneNumber > .insp-input__wrapper > .insp-input__input')
      .should('be.visible')
      .and('have.value', '(11) 94170-4385');
    
      cy.get('#birthDate > .insp-input > .insp-input__wrapper > .insp-input__input')
      .should('be.visible')
      .and('have.value', '10/03/1984');

  });

  it('CPF não permitido Retorno', () => {
    InscricaoRetorno.completeTheApplicationStarted();
    cy.get('.registration-identification-modal__button > .btn')
        .should('be.visible')
        .click();
    InscricaoRetorno.cpfnotallowed();
    cy.get('.registration-modal__description')
      .should('be.visible')
      .contains('Este processo é exclusivo para estudantes do curso de Medicina da Instituição que estejam com o status "Abandono" no curso. Infelizmente, você não se enquadra nos requisitos necessários para participar.');
    cy.get('.registration-modal__button > .btn')
      .should('be.visible')
      .and('have.text', 'Entendi')
  });

  it('Falha na busca de CPF Retorno', () => {
    // Intercepta a requisição de validação de CPF e simula um erro 500
    cy.intercept({
      method: 'GET',
      pathname: '/atr-ficha-inscricao-api/api/Enrollment/validateCpf',
    }, {
      statusCode: 500,
      body: { error: 'Erro interno no servidor' },
    }).as('validateCpf');

    InscricaoRetorno.completeTheApplicationStarted();
    cy.get('.registration-identification-modal__button > .btn')
        .should('be.visible')
        .click();
    InscricaoRetorno.cpfnotallowed();

    cy.wait('@validateCpf');

    // Assert 

    cy.get('.registration-error__contenet > :nth-child(1)')
      .should('be.visible')
      .contains('Não conseguimos localizar sua matrícula neste momento. Para continuar, é necessário que sua matrícula seja validada.');

  });

});



