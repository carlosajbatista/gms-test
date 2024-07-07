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

    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})