# todoMVC_cypress
Automação Web realizada no site todo MVC  utilizando o framework Cypress

## Tecnologia utilizada
Cypress v13.16.1

## Link do site testado
Site: https://todomvc.com/examples/javascript-es5/dist/

## Como instalar o ambiente
### Instalar Cypress:
  
Para instalar o Cypress, execute o seguinte comando no seu terminal:
- npm install cypress --save-dev

### Instalar Mochawesome para relatórios (opcional):
  
Se você deseja gerar relatórios em HTML para os testes do Cypress, instale o mochawesome:
- npm install mochawesome --save-dev

## Como rodar os testes
### Pelo Cypress
Rodando os testes: Execute o Cypress com o seguinte comando no terminal:

- npx cypress open  # Para abrir a interface gráfica do Cypress
- npx cypress run  # Para rodar os testes em modo headless

Rodando com relatório (mochawesome): Para gerar relatórios em HTML ao rodar os testes, use o comando abaixo:
- npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/results

## Relatórios
Cypress: Se você rodou os testes com o Cypress usando o mochawesome, o relatório será gerado no diretório especificado em reportDir=cypress/results.
