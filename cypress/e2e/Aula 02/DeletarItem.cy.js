import telaInicial from "../../support/pagesObjects/tela-inicial.pageObjects";

describe('Deletar itens da lista',() => {
    beforeEach (() =>{
        cy.visit('/')
        var todoItens = ["Maçã", "Banana", "Uva", "Abacaxi"]
        todoItens.forEach (function(item, indice, array){
            telaInicial.inputText(item)
        })

    })

    it('Deletar um item da lista', () => {
        telaInicial.deletarItens()
    });
   


    });