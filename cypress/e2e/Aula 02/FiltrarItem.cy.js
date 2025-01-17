import telaInicial from "../../support/pagesObjects/tela-inicial.pageObjects";

describe('Validar filtros da aplicação',() => {
    beforeEach (() =>{
        cy.visit('/')
        var todoItens = ["Maçã", "Banana", "Uva", "Abacaxi"]
        todoItens.forEach (function(item, indice, array){
            telaInicial.inputText(item)
        })

        telaInicial.concluirItem()
    })

    it('Filtrar itens ativos', () => {
        telaInicial.filtrarItem("Active")

    });
    
    it('Filtrar itens concluidos', () => {
        telaInicial.filtrarItem("Completed")
    });
});