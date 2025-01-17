/*
* Feature -> describe
* background -> contexto ou beforeEach
* caso de teste -> it
*/

import telaInicial from '../../support/pagesObjects/tela-inicial.pageObjects'

describe('Acessar Pagina TodoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('/')
    telaInicial.inputText("Dado1")
  })
})