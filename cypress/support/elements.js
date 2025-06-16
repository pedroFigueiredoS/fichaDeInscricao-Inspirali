exports.elementsFichaDeInscricao = {
  // Elementos da página "Inscrição Iniciada"
  TitleFormularioDeInscricao: '.registration-form__title', 
  TitleProcessoSeletivoMedicina: '.registration-form__subtitle', 
  TitleInputName: ':nth-child(1) > label',
  InputName: ':nth-child(1) > .insp-input > .insp-input__wrapper > .insp-input__input',
  TitleInputEmail: ':nth-child(2) > label',
  InputEmail: ':nth-child(2) > .insp-input > .insp-input__wrapper > .insp-input__input',
  TitleInputPhone: ':nth-child(3) > label',
  InputPhone: ':nth-child(3) > .insp-input > .insp-input__wrapper > .insp-input__input',
  ButtonInscrevaSeJa: '.btn',
  ButtonAgree: '.registration-modal__button > .btn',

  //Elementos da página "Informações Pessoais"
  TitleCPF: '#cpf > label',
  InputCPF: '#cpf > .insp-input > .insp-input__wrapper > .insp-input__input',
  TitleGender: '#gender > [data-v-4c00fb04=""]', 
  SelectgenderMan: '#gender > .insp-radio > :nth-child(1)',
  SelectGenderWoman: '#gender > .insp-radio > :nth-child(1)',
  TitleBirthDate: '#birthDate > label',
  InputBirthDate: '#birthDate > .insp-input > .insp-input__wrapper > .insp-input__input',
  TitleRg: '#rg > label',
  InputRg: '#rg > .insp-input > .insp-input__wrapper > .insp-input__input',
  TitleNameMother: '#nameMother > label',
  inputNameMother: '#nameMother > .insp-input > .insp-input__wrapper > .insp-input__input',

  //Elementos da página "Dados Complementares"
  TitleCep: '#cep > label',
  InputCep: '#cep > .insp-input > .insp-input__wrapper > .insp-input__input',
  TitleEstado: '#state > label',
  InputEstado: '#state > .insp-select > .insp-select__wrapper > .insp-select__input',
  TitleCidade: '#city > label',
  InputCidade: '#city > .insp-input > .insp-input__wrapper > .insp-input__input', 
  TitleBairro: '#neighborhood > label',
  InputBairro: '#neighborhood > .insp-input > .insp-input__wrapper > .insp-input__input',
  TitleEndereco: '#address > label',
  InputEndereco: '#address > .insp-input > .insp-input__wrapper > .insp-input__input',
  TitleNumber: '.registration-identification__number > .insp-form-field > label',
  InputNumber: '.registration-identification__number > .insp-form-field > .insp-input > .insp-input__wrapper > .insp-input__input',
  Titlecomplemento: ':nth-child(6) > :nth-child(2) > label',
  InputComplemento: ':nth-child(2) > .insp-input > .insp-input__wrapper > .insp-input__input',

  //Elementos da página "Dados de ingresso" ENEM 
  TitleAnoDeRealizacaoEnem: '#enemYear > label',
  SelectAnoDeRealizacaoEnem: '#enemYear > .insp-dropdown > .insp-dropdown__select',
  SelectAno2024: '.insp-dropdown__items > :nth-child(15)',
  TitleBumeroDeInscricaoEnem: '#enemEnrollment > label',
  InputBumeroDeInscricaoEnem: '#enemEnrollment > .insp-input > .insp-input__wrapper > .insp-input__input',
  TitleOndeCocncluiuOEnsinoMedio: '.registration-candidate-course__title',
  TitleEstado3: '#stateSchool > label',
  SelectEstado: '#stateSchool > .insp-dropdown > .insp-dropdown__select',
  SelectEstadoRO: '.insp-dropdown__items > :nth-child(22)',
  TitleCidade3: '#citySchool > label',
  SelectCidade3: '#citySchool > .insp-dropdown > .insp-dropdown__select',
  SelectCidade3Cocoal: '.insp-dropdown__items > :nth-child(18)',
  TitleEscola: '#nameSchool > label',
  InputEscola: '.insp-autocomplete__input',
  TitleAnoDeConclusao: '#conclusionSchool > label',
  InputAnoDeConclusao: '#conclusionSchool > .insp-input > .insp-input__wrapper > .insp-input__input',

  //Elementos da página "Dados de ingresso" Transferência Externa
  TitleInstituicaoDeOrigem: '.insp-form > :nth-child(1) > [data-v-4c00fb04=""]',
  SelectNacional: '.insp-radio > :nth-child(1)',
  SelectEstrangeira: '.insp-radio > :nth-child(2)',
  TitleEstadoTransferenciaExterna: '#institutionState > label',
  SelectEstadoTransferenciaExterna: '#institutionState > .insp-dropdown > .insp-dropdown__select',
  SelectEstadoTransferenciaExternaAC: '.insp-dropdown__items > :nth-child(1)',
  TitleCidadeTransferenciaExterna: '#institutionCity > label',
  SelectCidadeTransferenciaExterna: '#institutionCity > .insp-dropdown > .insp-dropdown__select',
  SelectAcrelandiaTransferenciaExterna: '.insp-dropdown__items > :nth-child(1)',
  TitleInstituicaoDeOrigemTransferenciaExterna: '#institutionName > label',
  InputInstituicaoDeOrigemTransferenciaExterna: '#institutionName > .insp-autocomplete > .insp-autocomplete__input-container',
  TitleCursoDeOrigemTransferenciaExterna: '#institutionCourse > label',
  InputCursoDeOrigemTransferenciaExterna: '#institutionCourse > .insp-autocomplete > .insp-autocomplete__input-container',
  TitleOUltimoPeriodoCursadoTransferenciaExterna: '#lastCompletedTerm > label',
  InputOUltimoPeriodoCursadoTransferenciaExterna: '.insp-input__input',
  SelectCursoDeOrigemMedicinaTransferenciaExterna: '.insp-autocomplete__items > :nth-child(2)',

  //Pagina de recuperação de inscrição

  TitleQueBomTerVoceDeVolta: '.registration-welcome__title',
  TitleH2RecuperacaoDeInscricao: '.registration-welcome__container > :nth-child(2) > :nth-child(2)',
  TitleH2RecuperacaoDeInscricaoEsseEOMomento: ':nth-child(2) > :nth-child(3)',
  TitleComoVoceQuerSeguir: '.registration-incomplete__title',
  TitleMedicinaCurso: '.registration-incomplete__course',
  TitleSituacao: ':nth-child(5) > :nth-child(1)',
  InformationSituacao: ':nth-child(5) > :nth-child(2)',
  ButtonRevisarEConcluirInscricao: '.registration-incomplete__button > .btn',
  TitleCodPromotion: '.registration-incomplete__coupon > span',
  InputCupomRecuperacao: '.insp-input__input',

  // Ementos Cupom
  TitleCupom: ':nth-child(8) > [data-v-4c00fb04=""]',
  ButtonYes: ':nth-child(8) > .insp-radio > :nth-child(2) > .insp-radio__checkmark',
  TitlePromotionCode: ':nth-child(9) > label',
  InputCupom: ':nth-child(9) > .insp-input > .insp-input__wrapper > .insp-input__input',



  // Geral 
  ButtonAvançar: '.btn > span',
  ButtonAvançarPortadorDeDiploma: '.btn',
}