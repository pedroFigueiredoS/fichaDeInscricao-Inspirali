/// <reference types="cypress" /> 

import { elementsFichaDeInscricao } from '../../elements';
import { faker } from '@faker-js/faker';

class InscricaoRetorno {
  static completeTheApplicationStarted() {
    const nome = `TESTE AUTOMAÇÃO ${faker.name.firstName()} ${faker.name.lastName().replace(/[^a-zA-Z]/g, '')}`;
    const email = `teste.automacao.${faker.internet.email().toLowerCase()}`;

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

    // cy.get(elementsFichaDeInscricao.ButtonAgree, { timeout: 1000 })
    //   .then(($btn) => {
    //     if ($btn.length) {
    //       cy.wrap($btn).click();
    //     }
    //   });
    //cy.get(inscricaoIniciada.ButtonAgree).click();

  }

  
  static cpfnotallowed() {
    cy.get(elementsFichaDeInscricao.TitleCPF)
      .should('be.visible')
      .and('have.text', 'CPF');

    function gerarCPF() {
      const numeros = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
      const cpfBase = numeros.join('');

      // Cálculo dos dois dígitos verificadores
      const calcularDigito = (base) => {
        let soma = 0;
        let peso = base.length + 1;

        for (let i = 0; i < base.length; i++) {
          soma += parseInt(base[i]) * peso--;
        }

        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
      };

      const digito1 = calcularDigito(cpfBase);
      const digito2 = calcularDigito(cpfBase + digito1);

      return `${cpfBase.slice(0, 3)}.${cpfBase.slice(3, 6)}.${cpfBase.slice(6, 9)}-${digito1}${digito2}`;
      
    }
    const cpf = gerarCPF(); // agora salva o CPF gerado
    Cypress.env('cpfGerado', cpf); // armazena para uso em outros testes
    // Uso no teste
    cy.get(elementsFichaDeInscricao.InputCPF)
      .should('be.visible')
      .type(cpf);

  }

    static cpfallowed() {
    cy.get(elementsFichaDeInscricao.TitleCPF)
      .should('be.visible')
      .and('have.text', 'CPF');

    cy.get(elementsFichaDeInscricao.InputCPF)
      .should('be.visible')
      .type('32822518823');


  }

  static personalinformation() {
    cy.get(elementsFichaDeInscricao.TitleCPF)
      .should('be.visible')
      .and('have.text', 'CPF');

    function gerarCPF() {
      const numeros = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
      const cpfBase = numeros.join('');

      // Cálculo dos dois dígitos verificadores
      const calcularDigito = (base) => {
        let soma = 0;
        let peso = base.length + 1;

        for (let i = 0; i < base.length; i++) {
          soma += parseInt(base[i]) * peso--;
        }

        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
      };

      const digito1 = calcularDigito(cpfBase);
      const digito2 = calcularDigito(cpfBase + digito1);

      return `${cpfBase.slice(0, 3)}.${cpfBase.slice(3, 6)}.${cpfBase.slice(6, 9)}-${digito1}${digito2}`;
      
    }
    const cpf = gerarCPF(); // agora salva o CPF gerado
    Cypress.env('cpfGerado', cpf); // armazena para uso em outros testes
    // Uso no teste
    cy.get(elementsFichaDeInscricao.InputCPF)
      .should('be.visible')
      .type(cpf);
    
    

    //RG//
    //  cy.get(elementsFichaDeInscricao.TitleRg)
    //    .should('be.visible')
    //    .and('have.text', 'RG')
    //  const rg = faker.string.numeric(7)
    //  cy.get(elementsFichaDeInscricao.InputRg)
    //    .should('be.visible')
    //    .type(rg);
    //RG//

    cy.get(elementsFichaDeInscricao.TitleGender)
      .should('be.visible')
      .and('have.text', 'Sexo');

    cy.get(elementsFichaDeInscricao.SelectgenderMan)
      .should('be.visible')
      .click();

    // Nome da Mãe //
    //  cy.get(elementsFichaDeInscricao.TitleNameMother)
    //   .should('be.visible')
    //    .and('have.text', 'Nome da mãe');
    //  cy.get(elementsFichaDeInscricao.inputNameMother)
    //    .should('be.visible')
    //    .type(`TESTE AUTOMAÇÃO ${faker.name.firstName()} ${faker.name.lastName().replace(/[^a-zA-Z]/g, '')}`);
    // Nome da Mãe //

    cy.get(elementsFichaDeInscricao.TitleBirthDate)
      .should('be.visible')
      .and('have.text', 'Data de Nascimento');

    const birthDate = faker.date.birthdate({ min: 18, max: 40, mode: 'age' });

    const day = String(birthDate.getDate()).padStart(2, '0');
    const month = String(birthDate.getMonth() + 1).padStart(2, '0'); // getMonth() retorna 0-11
    const year = birthDate.getFullYear();

    const formattedBirthDate = `${day}/${month}/${year}`;

    cy.get(elementsFichaDeInscricao.InputBirthDate)
      .should('be.visible')
      .type(formattedBirthDate);


    cy.get(elementsFichaDeInscricao.ButtonAvançar, { timeout: 5000 }).then(($btn) => {
      const isDisabled = $btn.is(':disabled') || $btn.hasClass('disabled');
      if (!isDisabled) {
        cy.wrap($btn).click();
      } else {
        cy.log('Botão ainda desabilitado. Teste segue sem clicar.');
      }
    });

    cy.get(elementsFichaDeInscricao.ButtonAvançar).click();

  }

  static Additionaldata() {
    cy.get(elementsFichaDeInscricao.TitleCep)
      .should('be.visible')
      .and('have.text', 'CEP');

    cy.get(elementsFichaDeInscricao.InputCep)
      .should('be.visible')
      .type('02251000');

    cy.get(elementsFichaDeInscricao.InputCidade, { timeout: 10000 })
      .should('have.value', 'São Paulo');

    cy.get(elementsFichaDeInscricao.InputBairro, { timeout: 10000 })
      .should('have.value', 'Vila Nivi');

    cy.get(elementsFichaDeInscricao.TitleEstado)
      .should('be.visible')
      .and('have.text', 'Estado');

    cy.get(elementsFichaDeInscricao.TitleCidade)
      .should('be.visible')
      .and('have.text', 'Cidade');

    cy.get(elementsFichaDeInscricao.TitleBairro)
      .should('be.visible')
      .and('have.text', 'Bairro');

    cy.get(elementsFichaDeInscricao.TitleEndereco)
      .should('be.visible')
      .and('have.text', 'Endereço');

    cy.get(elementsFichaDeInscricao.TitleNumber)
      .should('be.visible')
      .and('have.text', 'Número');

    cy.get(elementsFichaDeInscricao.InputNumber)
      .should('be.visible')
      .type('1234');

    cy.get(elementsFichaDeInscricao.Titlecomplemento)
      .should('be.visible')
      .and('have.text', 'Complemento');

    cy.get(elementsFichaDeInscricao.ButtonAvançar).click();
  }

  static Entrydetails() {
    cy.get(elementsFichaDeInscricao.TitleAnoDeRealizacaoEnem)
      .should('be.visible')
      .and('have.text', 'Ano da Realização do Enem');

    cy.get(elementsFichaDeInscricao.SelectAnoDeRealizacaoEnem)
      .should('be.visible')
      .click();

    cy.get(elementsFichaDeInscricao.SelectAno2024)
      .scrollIntoView()
      .should('be.visible')
      .click();
    
    cy.get(elementsFichaDeInscricao.TitleBumeroDeInscricaoEnem)
      .should('be.visible')
      .and('have.text', 'Número de Inscrição do Enem');

    cy.get(elementsFichaDeInscricao.InputBumeroDeInscricaoEnem)
      .should('be.visible')
      .type('241087987544');

    cy.get(elementsFichaDeInscricao.TitleOndeCocncluiuOEnsinoMedio)
      .should('be.visible')
      .and('contain.text', 'Onde estuda ou concluiu o ensino médio?');

    cy.get(elementsFichaDeInscricao.TitleEstado3)
      .should('be.visible')
      .and('have.text', 'Estado');

    cy.get(elementsFichaDeInscricao.SelectEstado)
      .should('be.visible')
      .click();

    cy.get(elementsFichaDeInscricao.SelectEstadoRO)
      .scrollIntoView()
      .should('be.visible')
      .click();

    cy.get(elementsFichaDeInscricao.TitleCidade3)
      .should('be.visible')
      .and('have.text', 'Cidade');

    cy.get(elementsFichaDeInscricao.SelectCidade3)
      .should('be.visible')
      .click();

    cy.get(elementsFichaDeInscricao.SelectCidade3Cocoal)
      .scrollIntoView()
      .should('be.visible')
      .click();

    cy.get(elementsFichaDeInscricao.TitleEscola)
      .should('be.visible')
      .and('have.text', 'Escola');

    cy.get(elementsFichaDeInscricao.InputEscola)
      .should('be.visible')
      .type('Dr. EE Rui Rodrigues Automation');

    cy.get(elementsFichaDeInscricao.TitleAnoDeConclusao)
      .should('be.visible')
      .and('have.text', 'Ano de Conclusão do Ensino Médio');

    const anoConclusao = faker.date.past(5, new Date()).getFullYear(); // Ano atual - 5 anos
    const anoConclusaoFormatado = `${anoConclusao}`;

    cy.get(elementsFichaDeInscricao.InputAnoDeConclusao)
      .should('be.visible')
      .type(anoConclusaoFormatado)

    cy.get(elementsFichaDeInscricao.ButtonAvançar).click();
  }
  static Finish() {
    cy.get(elementsFichaDeInscricao.ButtonInscrevaSeJa).click();
  }
}

export default InscricaoRetorno;
