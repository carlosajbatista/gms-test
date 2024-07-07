/// <reference types="cypress">

describe('US-012 - Funcionalidade de cadastro de membros', () => {
  it('Deve fazer o cadastro dos campos obrigatorios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type("Carlos")
    cy.get('#signup-lastname').type("Batista")
    cy.get('#signup-email').type("carlos@mail.com")
    cy.get('#signup-phone').type("4799988556622")
    cy.get('#signup-password').type("Teste!1234")

    cy.get('#signup-button').click()

    //cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('Nao deve fazer o cadastro quando nome nao informado', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-lastname').type("Batista")
    cy.get('#signup-email').type("carlos@mail.com")
    cy.get('#signup-phone').type("4799988556622")
    cy.get('#signup-password').type("Teste!1234")

    cy.get('#signup-button').click()

    cy.get('#signup-response').should('contain', 'Nome não pode estar vazio')
  })
  it('Nao deve fazer o cadastro quando nome invalido', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-lastname').type("Batista")
    cy.get('#signup-email').type("carlos@mail.com")
    cy.get('#signup-phone').type("4799988556622")
    cy.get('#signup-password').type("Teste!1234")

    cy.get('#signup-button').click()

    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  it('Nao deve fazer o cadastro quando sobrenome nao informado', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type("Carlos")
    cy.get('#signup-email').type("carlos@mail.com")
    cy.get('#signup-phone').type("4799988556622")
    cy.get('#signup-password').type("Teste!1234")

    cy.get('#signup-button').click()

    cy.get('#signup-response').should('contain', 'Sobrenome não pode estar vazio')
  })
  it('Nao deve fazer o cadastro quando sobrenome invalido', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type("Carlos")
    cy.get('#signup-lastname').type("a1s2d3f4")
    cy.get('#signup-email').type("carlos@mail.com")
    cy.get('#signup-phone').type("4799988556622")
    cy.get('#signup-password').type("Teste!1234")

    cy.get('#signup-button').click()

    cy.get('#signup-response').should('contain', 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  it('Nao deve fazer o cadastro quando email nao informado', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type("Carlos")
    cy.get('#signup-lastname').type("Batista")
    cy.get('#signup-phone').type("4799988556622")
    cy.get('#signup-password').type("Teste!1234")

    cy.get('#signup-button').click()

    cy.get('#signup-response').should('contain', 'E-mail não pode estar vazio')
  })
  it('Nao deve fazer o cadastro quando email invalido', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type("Carlos")
    cy.get('#signup-lastname').type("Batista")
    cy.get('#signup-email').type("carlosmail.com")
    cy.get('#signup-phone').type("4799988556622")
    cy.get('#signup-password').type("Teste!1234")

    cy.get('#signup-button').click()

    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })
  it('Nao deve fazer o cadastro quando email repetido', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type("Carlos")
    cy.get('#signup-lastname').type("Batista")
    cy.get('#signup-email').type("carlos@mail.com")
    cy.get('#signup-phone').type("4799988556622")
    cy.get('#signup-password').type("Teste!1234")

    cy.get('#signup-button').click()

    cy.get('#signup-response').should('contain', 'Este email já está cadastrado.')
  })

it('Deve fazer o cadastro dos campos obrigatorios e sem telefone', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type("Carlos")
    cy.get('#signup-lastname').type("Batista")
    cy.get('#signup-email').type("carlos2@mail.com")
    cy.get('#signup-password').type("Teste!1234")

    cy.get('#signup-button').click()

    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
  it('Nao deve fazer o cadastro quando telefone invalido', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type("Carlos")
    cy.get('#signup-lastname').type("Batista")
    cy.get('#signup-email').type("carlos@mail.com")
    cy.get('#signup-phone').type("abcdefghi")
    cy.get('#signup-password').type("Teste!1234")

    cy.get('#signup-button').click()

    cy.get('#signup-response').should('contain', 'Telefone deve conter apenas números')
  })

  it('Nao deve fazer o cadastro quando senha nao informada', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type("Carlos")
    cy.get('#signup-lastname').type("Batista")
    cy.get('#signup-email').type("carlos@mail.com")
    cy.get('#signup-phone').type("4799988556622")

    cy.get('#signup-button').click()

    cy.get('#signup-response').should('contain', 'Senha não pode estar vazia')
  })
  it('Nao deve fazer o cadastro quando senha fraca', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type("Carlos")
    cy.get('#signup-lastname').type("Batista")
    cy.get('#signup-email').type("carlos@mail.com")
    cy.get('#signup-phone').type("4799988556622")
    cy.get('#signup-password').type("teste12")

    cy.get('#signup-button').click()

    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial')
  })

})