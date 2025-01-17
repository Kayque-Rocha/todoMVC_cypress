import telaInicial from "../../support/pagesObjects/tela-inicial.pageObjects";

describe('Concluir itens na lista ToDo',() => {
    beforeEach (() =>{
        cy.visit('/')
        var todoItens = ["Maçã", "Banana", "Uva", "Abacaxi"]
        todoItens.forEach (function(item, indice, array){
            telaInicial.inputText(item)
        })
    })

    it('Concluir item lista ToDo', () => {
        telaInicial.concluirItem()        
        });
    });