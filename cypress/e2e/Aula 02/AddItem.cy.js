import telaInicial from "../../support/pagesObjects/tela-inicial.pageObjects";

describe('Adicionar Item na minha lista de ToDo',() => {
    beforeEach (() =>{
        cy.visit('/')
    })

    it('Adicionar um item na lista', () => {
        telaInicial.inputText("Dado1")
      })

      it('Adicionar mais de um item na lista', () => {

        var todoItens = ["Maçã", "Banana", "Uva", "Abacaxi"]
        todoItens.forEach (function(item, indice, array){
            telaInicial.inputText(item)
        })
    });
 });