# Tellar Soluções em Engenharia

## Aplicação web para uma empresa pioneira no ramo de projetos em energia solar.

<br>
<br>
<br>

# Dependências

- ## Node.js

- ## React.js

<br>
<br>

# Criação do projeto

- # Criar o projeto Back-end:

  - ## Inicializar o projeto com o npm:

    - `npm init`

    <br>

  - ## Instalar as dependências do projeto (express, typescript, ts-node):

    - `npm install express typescript ts-node`

    <br>

  - ## Configurar o arquivo tsconfig.json:

    - `   {
"compilerOptions": {
"target": "es6",
"module": "commonjs",
"strict": true,
"noImplicitAny": false,
"removeComments": true,
"sourceMap": true,
"outDir": "dist/backend",
"rootDir": "src/backend",
"lib": ["es2017"] (verificar isso aq)
},
"include": [
"src/backend/**/*.ts"
],
"exclude": ["node_modules"]
}`

          <br>

  - ## Criar o arquivo principal do back-end (ex: index.ts)

<br>
  
  <br>

- # Criar o projeto Front-end:

  - ## Inicializar o projeto com yarn:

    - `yarn init npm init`

    <br>

  - ## Instalar as dependências do projeto (react, react-dom, next, typescript)

    - `yarn install (ou npm install) react react-dom next typescript`

    <br>

  - ## Configurar o arquivo tsconfig.json:

    - `    {
"compilerOptions": {
"target": "es6",
"module": "commonjs",
"strict": true,
"noImplicitAny": false,
"removeComments": true,
"sourceMap": true,
"outDir": "dist/frontend",
"rootDir": "src/frontend",
"jsx": "react",
"lib": ["dom", "es2017"] (verificar isso aq)
},
"include": [
"src/frontend/**/*.ts",
"src/frontend/**/*.tsx"
],
"exclude": ["node_modules"]
}`

    <br>

  - ## Criar o arquivo principal do front-end (ex: pages/index.tsx)

    <br>

    <br>

    <br>

# Implementação das páginas

  <br>
  
- # Criar a página Login:

- ## Criar o componente de Login

  <br>

  - ## Implementar a funcionalidade de autenticação do usuário com API

  <br>

  <br>

- # Criar a página Projetos (home da aplicação):

  - ## Criar o componente de listagem de Projetos

  <br>

  - ## Criar o componente de Cadastro de Projetos

    - ### formulário que receberá os seguintes dados:
          - #### : Estado, CEP, cidade, bairro, endereco, número e complemento, nome da concessionária de energia (ex.: ENEL), potência total do projeto, espaço para upar um arquivo em pdf, nome completo do responsável (cliente) e telefone para contato
      <br>

  - ## Implementar as operações de CRUD com API

  <br>

  - ## Implementar o envio do arquivo PDF ao realizar o cadastro de projetos

  <br>

  - ## Implementar a máscara dos dados de telefone e CEP

  <br>

  - ## Implementar a busca automática de endereco a partir do CEP

  <br>

  - ## Implementar o filtro de estados na listagem de projetos

  <br>

  <br>

- # Criar a página Usuários

  - ## Criar o componente de listagem de Usuários

  <br>

  - ## Criar o componente de Cadastro de Usuários

    - ### Formulário que receberá os seguintes dados:

      - ### CPF, nome completo, e-mail, telefone, CEP, cidade, bairro, endereco, número e complemento.
        - ### Requisitos:
          ### 1. Telefone e CEP (zip-code) devem ser mascarados (Telefone: (00) 0000-0000, Cep: 00000-000).
          ### 2. Ao adicionar o CEP, os demais campos referentes as informações de endereco relacionadas a ele devem ser preenchidas automaticamente, podendo ser editadas pelo usuário.
          ### 3. Caso seja feito o cadastro de um usuário com o CPF já cadastrado no sistema, uma mensagem de alerta deve ser emitida para visualização do usuário.
          ### 4. Deve conter um filtro disponível na listagem de projetos cadastrados por estados.
          ### 5. Deve ser possível fazer o logout do site.

      <br>

  - ## Implementar as operações de CRUD com API

  <br>

  - ## Implementar o filtro de usuários na listagem de usuários

  <br>

  - ## Implementar a validação do CPF do usuário ao realizar o cadastro

  <br>

  <br>

  <br>

- # Implementar a funcionalidade de Logout

  - ## Criar o componente de Logout

  <br>

  - ## Implementar a rota de logout na API

  <br>

  <br>

# Desenvolvimento e testes

- ## Executar o back-end

  - `npm run start`

  <br>

- ## Executar o front-end

  - `yarn start yarn run dev`

  <br>

- ## Realizar os testes unitários

  - ### Criar os testes unitários

  <br>

  - ### Executar os testes unitários

  <br>

- ## Realizar os testes de integração

  - ### Criar os testes de integração

  <br>

  - ### Executar os testes de integração

  <br>

  <br>

# Deploy

- ## Preparar o ambiente de produção

  - ### Instalar e configurar o servidor de aplicação (ex: Nginx)

  <br>

  - ### Instalar e configurar o banco de dados (ex: PostgreSQL)

  <br>

- ## Realizar o deploy da aplicação

  - ### Build da aplicação front-end
    - `npm run build`

  <br>

  - ### Build da aplicação back-end
    - `npm run build`

  <br>

  - ### Enviar o código para o ambiente de produção

  <br>

  <br>

# Manutenção

- ## Realizar a manutenção da aplicação

  - ### Corrigir bugs encontrados

  <br>
   
  - ### Adicionar novas funcionalidades
    
  <br>

  - ### Atualizar as dependências da aplicação

  <br>

  - ### Realizar backup regularmente.
