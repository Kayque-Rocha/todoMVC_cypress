import { ITEM } from '../elements/tela-inicial.elements'

const element = require ('../elements/tela-inicial.elements').ELEMENTS
const concluirItem = require ('../elements/tela-inicial.elements').ITEM
const filtroItem = require ('../elements/tela-inicial.elements').FILTROS

class telaInicial {
        
    inputText(dado){
        cy.get(element.inputToDo).type(dado).type('{enter}')
    }

    concluirItem(){
        cy.get(concluirItem.buttonConcluirItem)
        .last()
        .click()
    }
    
    filtrarItem(menu){
        cy.get(filtroItem.filtroToDo)  
        .contains(menu)
        .and('be.visible')
        .click()
    }


    deletarItens(){
    cy.get(concluirItem.listaItens)
    .first()
    .find('button')
    .invoke('show')
    .click()
    }

    validarInput (texto){
    cy.get(element.inputToDo)
    .should('have.attr', 'placeholder')
    .and('include', texto)
    }

    validarContador(numero){
    cy.get(filtroItem.contador)
    .find('strong')
    .contains(numero)
    }

    validarSizeToDo (numero){
    cy.get(concluirItem.validarListaItens)
    .should('have.length', numero)
    }

}


export default new telaInicial ();