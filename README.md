# Portal Smartcities - bludigital

O ambiente bludigital é uma variação do projeto [sampa-digital](https://github.com/vanildo/sampa-digital/blob/master/routes/env.js) desenvolvido pela IBM. Essa documentação tem como objetivo facilitar o entendimento do projeto e o deploy do mesmo no Bluemix. Antes de continuar, você vai precisar:
* Ter uma conta no [IBM Bluemix](bluemix.net) e [IBM Hub Jazz](https://hub.jazz.net);
* Cadastrar chaves a API do [Google Maps](https://developers.google.com/maps/?hl=pt-br);
* Uma conta no [MongoLabs](https://mlab.com/);
* Uma conta no [Github](https://github.com/);

A aplicação é toda desenvolvida em [NodeJs](https://nodejs.org/en/) sobre o [Keystone](http://keystonejs.com/) utilizando o modelo de tamplate [Jade](http://jade-lang.com/). Antes de iniciar, você pode alterar o arquivo *update/0.0.1-admin.js* para definir o email do administrador do ambiente.

## Preparação inicial
Há várias formas de colocar o ambiente em funcionamento. Nesse tutorial iremos utilizar o ambiente de desenvolvimento [Hub Jazz](https://hub.jazz.net) da IBM como suporte para controle da aplicação. Para isso siga os seguintes passos:

1. Realize um fork deste [projeto](https://github.com/seniorlabs/bludigital) para uma conta sua no github;
2. Faça um clone do projeto;
3. Acesse o [MongoLabs](https://mlab.com/) e crie uma base de dados denominada *bludigital* e um usuário para acessar a base;

## Preparação no Bluemix
1. Acesse o [IBM Bluemix](bluemix.net) e crie um novo espaço chamado *bludigital* <br />
![Criar Espaço](readme/criar_espaco.png?raw=true "Criar Espaço")

2. Acesse o [Hub Jazz](https://hub.jazz.net) e crie um novo projeto a partir do github <br />
![Criar Projeto do Github](readme/criar_projeto_jazz.png?raw=true "Criar Projeto do Github")

3. Marque que este será um projeto Bluemix <br />
4. Selecione o espaço *bludigital*<br />
![Selecionar espaço](readme/selecionar_espaco.png?raw=true "Selecionar espaço")

5. Pelo ambiente de desenvolvimento do Jazz, selecione seu novo projeto e clique em "EDIT CODE" <br />
![Edit Code](readme/edit_code.png?raw=true "Edit Code")

6. Altere o arquivo *.env* com as informações de API Key e URL do MongoDB.

7. Clique no botão deploy e crie um configuração de lauch do seu aplicativo. <br />
![Deploy - Launcher](readme/launcher.png?raw=true "Deploy - Launcher")

9. Acesse a URL do seu aplicativo e faça os ajustes necessários.

10. Se necessário, acesse o ambiente do seu aplicativo e veja os logs do mesmo (Painel, Apps, bludigital) <br />
![Logs](readme/logs.png?raw=true "Logs")

## Sobre a aplicação
O arquivo *.env* pode ser usado para armazenar chaves de serviços externos. Idealmente você não deve fazer commit desse arquivo com dados de produção. Uma alternativa é usar as variáveis de ambiente do Bluemix.

