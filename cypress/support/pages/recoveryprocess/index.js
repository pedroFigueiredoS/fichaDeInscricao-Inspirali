/// <reference types="cypress" /> 

import { elementsFichaDeInscricao } from '../../elements';
import { faker } from '@faker-js/faker';

class recoveryProcess {
  static recoveryProcessEmail() {
    const email = Cypress.env('emailGerado');
    const nome = `TESTE AUTOMAÇÃO ${faker.name.firstName()} ${faker.name.lastName().replace(/[^a-zA-Z]/g, '')}`;
    
    cy.get(elementsFichaDeInscricao.TitleFormularioDeInscricao)
      .should('be.visible')
      .and('include.text', 'Formulário de Inscrição');

    cy.get(elementsFichaDeInscricao.TitleProcessoSeletivoMedicina)
      .should('be.visible')
      .and('include.text', 'Processo Seletivo de Medicina');

    cy.get(elementsFichaDeInscricao.TitleInputName)
      .should('be.visible')
      .and('have.text', 'Nome Completo');

    cy.get(elementsFichaDeInscricao.InputName)
      .should('be.visible')
      .type(nome);

    cy.get(elementsFichaDeInscricao.TitleInputEmail)
      .should('be.visible')
      .and('have.text', 'E-mail');

    cy.get(elementsFichaDeInscricao.InputEmail)
      .should('be.visible')
      .type(email);

    cy.get(elementsFichaDeInscricao.TitleInputPhone)
      .should('be.visible')
      .and('have.text', 'Telefone');

    cy.get(elementsFichaDeInscricao.InputPhone)
      .should('be.visible')
      .type(`9${faker.phone.number('+55 11 9########')}`);

    cy.get(elementsFichaDeInscricao.ButtonInscrevaSeJa)
      .should('be.visible')
      .click();
  }

  static applyCupomRecovery() {
    cy.get(elementsFichaDeInscricao.TitleCodPromotion)
      .should('be.visible')
      .and('include.text', 'Código Promocional?');
  }

  static recoveryProcessCPF() {
  const email = `teste.automacao.${faker.internet.email().toLowerCase()}`;
  const nome = `TESTE AUTOMAÇÃO ${faker.name.firstName()} ${faker.name.lastName().replace(/[^a-zA-Z]/g, '')}`;
  const cpf = Cypress.env('cpfGerado');

  cy.get(elementsFichaDeInscricao.TitleFormularioDeInscricao)
    .should('be.visible')
    .and('include.text', 'Formulário de Inscrição');

  cy.get(elementsFichaDeInscricao.TitleProcessoSeletivoMedicina)
    .should('be.visible')
    .and('include.text', 'Processo Seletivo de Medicina');

  cy.get(elementsFichaDeInscricao.TitleInputName)
    .should('be.visible')
    .and('have.text', 'Nome Completo');

  cy.get(elementsFichaDeInscricao.InputName)
    .should('be.visible')
    .first()
    .type(nome);

  cy.get(elementsFichaDeInscricao.TitleInputEmail)
    .should('be.visible')
    .and('have.text', 'E-mail');

  cy.get(elementsFichaDeInscricao.InputEmail)
    .should('be.visible')
    .first()
    .type(email);

  cy.get(elementsFichaDeInscricao.TitleInputPhone)
    .should('be.visible')
    .and('have.text', 'Telefone');

  cy.get(elementsFichaDeInscricao.InputPhone)
    .should('be.visible')
    .first()
    .type(`9${faker.phone.number('+55 11 9########')}`);

  cy.get(elementsFichaDeInscricao.ButtonInscrevaSeJa)
    .should('be.visible')
    .first()
    .click();

  cy.get(elementsFichaDeInscricao.TitleCPF)
    .should('be.visible')
    .and('have.text', 'CPF');

  cy.get(elementsFichaDeInscricao.InputCPF)
    .should('be.visible')
    .first()
    .type(cpf)
    .should('have.value', cpf); // garante que o valor foi inserido corretamente

  // Validação extra: próxima etapa está pronta (ajuste conforme sua tela)
  cy.get('body').then(($body) => {
    if ($body.find(elementsFichaDeInscricao.ButtonContinuar).length) {
      cy.get(elementsFichaDeInscricao.ButtonContinuar)
        .should('be.visible')
        .and('contain.text', 'Continuar');
    }
  });
}


static ReviewAndCompleteApplication() {
  cy.get(elementsFichaDeInscricao.TitleQueBomTerVoceDeVolta)
    .invoke('text')
    .then((text) => {
      const cleaned = text.replace(/\u00a0/g, ' ').trim();
      expect(cleaned).to.eq('Que bom te ver de volta!');
    });

  cy.get(elementsFichaDeInscricao.TitleH2RecuperacaoDeInscricao)
    .first()
    .scrollIntoView()
    .should('be.visible')
    .and('include.text', 'A vida pode ser uma verdadeira montanha-russa e, às vezes, a gente precisa de uma pausa para respirar. Mas olha só, você voltou! E isso é incrível!');

  cy.get(elementsFichaDeInscricao.TitleH2RecuperacaoDeInscricaoEsseEOMomento)
    .first()
    .scrollIntoView()
    .should('be.visible')
    .and('include.text', 'Esse é o momento de focar nos seus sonhos, conclua sua inscrição agora mesmo!');

  cy.get(elementsFichaDeInscricao.TitleComoVoceQuerSeguir)
    .invoke('text')
    .then((text) => {
      const cleaned = text.replace(/\u00a0/g, ' ').trim();
      expect(cleaned).to.eq('TESTE, como você quer seguir?');
    });

  cy.get(elementsFichaDeInscricao.TitleMedicinaCurso)
    .first()
    .scrollIntoView()
    .should('be.visible')
    .and('include.text', 'Medicina');

  cy.get(elementsFichaDeInscricao.TitleSituacao)
    .first()
    .scrollIntoView()
    .should('be.visible')
    .and('include.text', 'Situação');
  
  cy.get(elementsFichaDeInscricao.InformationSituacao)
    .first()
    .scrollIntoView()
    .should('be.visible')
    .and('include.text', 'Incompleta');

  cy.get(elementsFichaDeInscricao.ButtonRevisarEConcluirInscricao)
    .first()
    .scrollIntoView()
    .should('be.visible')
    .and('include.text', 'Revisar e Concluir inscrição')
    .click();
}

    static ReviewAndCompleteApplicationNewRegistration() {
    cy.get(elementsFichaDeInscricao.TitleQueBomTerVoceDeVolta)
      .invoke('text')
      .then((text) => {
        const cleaned = text.replace(/\u00a0/g, ' ').trim();
        expect(cleaned).to.eq('Que bom te ver de volta!');
      });

    cy.get(elementsFichaDeInscricao.TitleH2RecuperacaoDeInscricao)
      .scrollIntoView()
      .should('be.visible')
      .and('include.text', 'A vida pode ser uma verdadeira montanha-russa e, às vezes, a gente precisa de uma pausa para respirar. Mas olha só, você voltou! E isso é incrível!');

    cy.get(elementsFichaDeInscricao.TitleH2RecuperacaoDeInscricaoEsseEOMomento)
      .scrollIntoView()
      .should('be.visible')
      .and('include.text', 'Esse é o momento de focar nos seus sonhos, conclua sua inscrição agora mesmo!');

    cy.get(elementsFichaDeInscricao.TitleComoVoceQuerSeguir)
      .invoke('text')
      .then((text) => {
        const cleaned = text.replace(/\u00a0/g, ' ').trim();
        expect(cleaned).to.eq('TESTE, como você quer seguir?');
      });

    cy.get(elementsFichaDeInscricao.TitleMedicinaCurso)
      .scrollIntoView()
      .should('be.visible')
      .and('include.text', 'Medicina');

    cy.get(elementsFichaDeInscricao.TitleSituacao)
      .scrollIntoView()
      .should('be.visible')
      .and('include.text', 'Situação');
    
    cy.get(elementsFichaDeInscricao.InformationSituacao)
      .scrollIntoView()
      .should('be.visible')
      .and('include.text', 'Incompleta');

     cy.get(elementsFichaDeInscricao.ButtonSeguirComUmaNovaInscricao)
       .scrollIntoView()
       .should('be.visible')
       .and('include.text', 'Seguir com uma nova inscrição')
       .click();

  }
}
export default recoveryProcess;
