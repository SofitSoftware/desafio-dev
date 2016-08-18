# Desafio desafiador para ninjas do código
Este é um teste para desenvolvedores com interesse em fazer parte da equipe de ninjas do código da Sofit! :v:
### Objetivo
Desenvolver uma API REST para um CRUD de cadastro de veículos que se comunique com o front-end disponibilizado.
### O que você precisa fazer:
1. Faça um fork desse repositório;
2. Desenvolva o objetivo proposto;
3. Ao finalizar, envie um e-mail para desenvolvimento@sofit4.com.br com o link de acesso ao seu repositório.

### Configurando seu ambiente
1. Você vai precisar instalar (ou se já possui instalado) os seguintes pacotes/ferramentas:
  - Node.JS na versão 4.4.7;
  - NPM (_Node Package Manager_);
  - [Bower](https://bower.io/);
  - [http-server](https://www.npmjs.com/package/http-server); 
2. Para criar as APIs, é necessário utilizar o framework [Hapi.js](http://hapijs.com/);
3. O SGBD que você irá utilizar fica à sua escolha (MySQL, Postgres, MongoDB, etc.);
4. Executar os comandos `bower install` (para instalar as dependências) e `http-server` (para inicializar o projeto Angular) dentro da pasta __public__ do repositório;
5. Abrir o arquivo em `public/index.html` e editar o valor da variável __API_URL__ para o endereço da sua API;

### Requisitos da API:

1. Deve permitir __criar__, __editar__, __excluir__ e __visualizar (listagem e individualmente)__ veículos criados no front-end;
2. Deve utilizar os [métodos HTTP](http://gabsferreira.com/os-metodos-http-e-a-diferenca-entre-eles/) corretos para cada tipo de requisição;
3. Deve ser (obviamente) desenvolvida com Hapi.js e se conectar ao banco de dados;
4. Deve validar a integridade dos campos do cadastro (sugestão: utilizar o pacote [Joi](https://github.com/hapijs/joi));
5. Não deve permitir cadastrar mais de um veículo com a mesma placa;

### Objeto do veículo
Sua API deve estar apta a receber e também responder um objeto JSON conforme o exemplo abaixo:
```js
{
  name: "Tobata Rebaixada",
  brand_id: "1",
  model_id: "1",
  license_plate: "ABC-1234",
  id: "1"
}
```

### Dicas

- Utilize o [Postman](https://www.getpostman.com/) para testar sua API.
 
Boa sorte! :new_moon_with_face:
