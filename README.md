# Free To Game

Aplicação AngularJs que consome dados da API https://www.freetogame.com/api-doc

## Como executar a aplicação
### Execute o Proxy
Para fazer requisições é necessário executar um serviço node que atua como proxy
1. Entre na pasta Proxy a partir do terminal:
  ```bash
  cd .\proxy\
  ```
2. Instale as dependências executando:
  ```bash
  npm i
  ```
3. Execute o serviço node:
  ```bash
  node .\server.js
  ```
### Execute a aplicação Angular
1. Em seu terminal, no diretório raíz do projeto, para instalar as dependências, execute:
```bash
npm i
```

2. Então, execute:
```bash
npm start
```

## Como testar a Aplicação

Há dois tipos de testes configurados nesse projeto, testes unitários dos componentes gerenciados pelo próprio Angular e testes E2E gerenciados por Cypress

### Testes Unitários
1. No diretório raíz do projeto, já tendo instalado as dependências, execute

```bash
npm run test
```

### Testes E2E
1. Execute o serviço Cypress, o que irá abrir uma janela para solicitar a execução dos testes:
```bash
npm run cypress:open
```
2. Na janela Aberta, selecione testes E2E e, então será possível executar os scripts de testes configurados

Alternativamente é possível testar diretamente pelo terminal
1. Execute o script abaixo:
```bash
npm run cypress:run
```
