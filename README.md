## Desafio para ninjas do código SOFIT

#### Sua missão:
:point_right: Neste repositório, você encontra uma pequena aplicação _front-end_ desenvolvida com o framework [Angular.JS](https://angularjs.org/) para cadastro de veículos. Você deverá desenvolver uma **API REST** que se comunique com essa aplicação e possibilite o cadastro, edição, remoção e visualização (individual e lista) dos veículos cadastrados em um banco de dados.

#### O que você pode usar para desenvolver?
:point_right: Sugerimos o uso de [Node.JS](https://nodejs.org/en/) para o desenvolvimento da API e um banco de dados relacional, porém você é livre para utilizar as tecnologias que achar melhor, contudo que atenda aos requisitos deste desafio.

#### O que sua API deve fazer:
:point_right: Possibilitar a criação, edição, exclusão e obtenção de dados (listagem e individual) dos veículos cadastrados no _front-end_;

:point_right: Utilizar os métodos HTTP corretos para comunicação entre _front-end_ e API de acordo com o padrão REST;

:point_right: Validar a integridade e obrigatoriedade dos campos informados no cadastro, bem como não permitir a inserção de dois veículos com mesma placa.

#### Configurando o ambiente
Para executar corretamente a aplicação _front-end_, você deve:

:point_right: Executar os comandos `bower install` (para instalar as dependências) e `http-server` (para inicializar o projeto Angular) dentro da pasta **public** do repositório;

:point_right: Abrir o arquivo `public/index.html` e editar o valor da variável **API_URL** para o endereço da sua API.

#### Objeto do veículo
Sua API deve estar preparada para receber um objeto JSON com as seguintes propriedades:
```js
{
  name: "Carrinho do Marco Véio",
  brand_id: "1",
  model_id: "1",
  license_plate: "ABC-1234",
  id: "1"
}
```

#### Dica
:point_right: Utilize o [Postman](https://www.getpostman.com/) para testar sua API.

#### Acabei, e agora?
:point_right: Assim que finalizar, envie seu código ou link do repositório no GitHub para desenvolvimento@sofit4.com.br. Vamos analisar o seu código e lhe daremos um retorno assim que possível.

#### Dúvidas?
:point_right: Em caso de dúvidas, abra uma [issue](https://github.com/SofitSoftware/desafio-dev/issues/new) aqui no repositório que te respondemos.

Mãos a massa, e que a força esteja com você! :v:
