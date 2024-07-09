/// <reference types="cypress">

describe('US-012 - Funcionalidade de cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  afterEach(() => {
    cy.screenshot()
  });

  it('Deve fazer o cadastro dos campos obrigatorios', () => {
    var email = `carlos${Date.now()}@mail.com`
    cy.preencherCadastro('Carlos', 'Batista', email, '4799988556622', 'Teste!1234');

    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('Nao deve fazer o cadastro quando nome nao informado', () => {
    var email = `carlos${Date.now()}@mail.com`
    cy.preencherCadastro('', 'Batista', email, '4799988556622', 'Teste!1234');

    cy.get('#signup-response').should('contain', 'Nome não pode estar vazio')
  })
  it('Nao deve fazer o cadastro quando nome invalido', () => {
    var email = `carlos${Date.now()}@mail.com`
    cy.preencherCadastro('a1s2d3f4', 'Batista', email, '4799988556622', 'Teste!1234');

    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  it('Nao deve fazer o cadastro quando sobrenome nao informado', () => {
    var email = `carlos${Date.now()}@mail.com`
    cy.preencherCadastro('Carlos', '', email, '4799988556622', 'Teste!1234');

    cy.get('#signup-response').should('contain', 'Sobrenome não pode estar vazio')
  })
  it('Nao deve fazer o cadastro quando sobrenome invalido', () => {
    var email = `carlos${Date.now()}@mail.com`
    cy.preencherCadastro('Carlos', 'a1s2d3f4', email, '4799988556622', 'Teste!1234');

    cy.get('#signup-response').should('contain', 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  it('Nao deve fazer o cadastro quando email nao informado', () => {

    cy.preencherCadastro('Carlos', 'Batista', '', '4799988556622', 'Teste!1234');

    cy.get('#signup-response').should('contain', 'E-mail não pode estar vazio')
  })
  it('Nao deve fazer o cadastro quando email invalido', () => {
    var email = `carlosmail.com`
    cy.preencherCadastro('Carlos', 'Batista', email, '4799988556622', 'Teste!1234');

    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })
  it('Nao deve fazer o cadastro quando email repetido', () => {
    var email = `carlos@mail.com`
    cy.preencherCadastro('Carlos', 'Batista', email, '4799988556622', 'Teste!1234');

    cy.get('#signup-button').click()

    cy.get('#signup-response').should('contain', 'Este email já está cadastrado.')
  })

  it('Deve fazer o cadastro dos campos obrigatorios e sem telefone', () => {
    var email = `carlos${Date.now()}@mail.com`
    cy.preencherCadastro('Carlos', 'Batista', email, '', 'Teste!1234');

    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
  it('Nao deve fazer o cadastro quando telefone invalido', () => {
    var email = `carlos${Date.now()}@mail.com`
    cy.preencherCadastro('Carlos', 'Batista', email, 'abcdefghi', 'Teste!1234');

    cy.get('#signup-response').should('contain', 'Telefone deve conter apenas números')
  })

  it('Nao deve fazer o cadastro quando senha nao informada', () => {
    var email = `carlos${Date.now()}@mail.com`
    cy.preencherCadastro('Carlos', 'Batista', email, '4799988556622', '');

    cy.get('#signup-response').should('contain', 'Senha não pode estar vazia')
  })
  it('Nao deve fazer o cadastro quando senha fraca', () => {
    var email = `carlos${Date.now()}@mail.com`
    cy.preencherCadastro('Carlos', 'Batista', email, '4799988556622', 'teste12');

    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial')
  })

})