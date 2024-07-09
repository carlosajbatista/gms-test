/// <reference types="cypress">

describe('US-001 - Funcionalidade de busca de filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer uma busca com sucesso', () => {
        cy.get('#search-input').type('Matrix')

        cy.get('#search-button').click()

        cy.get('#results-section').should('contain', 'Matrix')
    })
    it('Nao deve retornar resultados quando filme nao correspondente', () => {
        cy.get('#search-input').type('a1s2d3f4')

        cy.get('#search-button').click()

        cy.get('#results-section').should('not.contain', 'a1s2d3f4')
        cy.get('#results-section > p').should('contain', 'Filme não encontrado.')
    })

    it('Deve fazer uma busca com sucesso de uma lista', () => {
        cy.fixture('filmes').then((filmes) => {

            cy.get('#search-input').type(filmes[0].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes[0].titulo)
        })
    })

    it('Deve fazer uma busca com sucesso de uma lista inteira', () => {
        cy.fixture('filmes').each((filmes) => {

            cy.get('#search-input').clear().type(filmes.titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes.titulo)
        })
    })
})