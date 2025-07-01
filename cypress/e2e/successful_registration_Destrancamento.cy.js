import InscricaoDestrancamento from '../support/pages/ContestDestrancamento/index.js';

describe('Teste de ficha de inscrição - Dinâmico por ambiente', () => {
  const concursoId = Cypress.env('concurso') || 16420;

  beforeEach(() => {
    cy.visit(`/concurso/${concursoId}`, {
      failOnStatusCode: false // essencial nesse caso
    });
  });

  it('CPF permitido Destrancamento', () => {
    InscricaoDestrancamento.completeTheApplicationStarted();
    InscricaoDestrancamento.cpfallowed();

    // Assert 
    cy.get('#name > .insp-input > .insp-input__wrapper > .insp-input__input')
      .should('be.visible')
      .and('have.value', 'Nataly Amorim El Dahouk');

    cy.get('#email > .insp-input__wrapper > .insp-input__input')
      .should('be.visible')
      .and('have.value', 'natalydahouk@gmail.com');

    cy.get('#phoneNumber > .insp-input__wrapper > .insp-input__input')
      .should('be.visible')
      .and('have.value', '(11) 97965-7996');
    
      cy.get('#birthDate > .insp-input > .insp-input__wrapper > .insp-input__input')
      .should('be.visible')
      .and('have.value', '16/06/2001');

  });

  it('CPF não permitido Destrancamento', () => {
    InscricaoDestrancamento.completeTheApplicationStarted();
    InscricaoDestrancamento.cpfnotallowed();
    cy.get('.registration-modal__description')
      .should('be.visible')
      .contains('Este processo é exclusivo para estudantes do curso de Medicina da Instituição que estejam com o status "Trancado" no curso. Infelizmente, você não se enquadra nos requisitos necessários para participar.');
    cy.get('.registration-modal__button > .btn')
      .should('be.visible')
      .and('have.text', 'Entendi')
  });

  it('Falha na busca de CPF Destrancamento', () => {
    // Intercepta a requisição de validação de CPF e simula um erro 500
    cy.intercept({
      method: 'GET',
      pathname: '/atr-ficha-inscricao-api/api/Enrollment/validateCpf',
    }, {
      statusCode: 500,
      body: { error: 'Erro interno no servidor' },
    }).as('validateCpf');

    InscricaoDestrancamento.completeTheApplicationStarted();
    InscricaoDestrancamento.cpfnotallowed();

    cy.wait('@validateCpf');

    // Assert 

    cy.get('.registration-error__contenet > :nth-child(1)')
      .should('be.visible')
      .contains('Não conseguimos localizar sua matrícula neste momento. Para continuar, é necessário que sua matrícula seja validada.');

  });

});



