# Curso Node.js do Zero ao Avançado

## Linguagens utilizadas durante o curso

&emsp; [![My Skills](https://skillicons.dev/icons?i=html,css)](https://skillicons.dev) &emsp; [![My Skills](https://skillicons.dev/icons?i=js)](https://skillicons.dev) &emsp; [![My Skills](https://skillicons.dev/icons?i=nodejs)](https://skillicons.dev) [![My Skills](https://skillicons.dev/icons?i=npm)](https://skillicons.dev)

##

### Seção 1

- A primeira seção do curso ele apresenta como vai funcionar o curso, sua estrutura.
- Está seção possui 18 aulas
- Contendo como instalar o node no linux e windows.
- Instalar o comander "cmder"
- como utilizar o terminar com node
- Instalação do VS Code
- Como utilizar o comando de executar um arquivo com código `node nomedoarquivo`.
- Utilização de modulos com fazer a importação de modulos exemplo: `const nomeVariavel = require('nomeDoPacote')` (no futuro será explicado o uso do import)
- Para concluir foi deixado um desafio para criar um primeiro programa em node.js
- O desafio para ser execurtado basta baixar o arquivo _programa.js_ abrir o terminal na pasta onde baixou o arquivo e digitar no terminal `node .\programa.js` o programa vai ser execultado com node.

### Seção 2

- Utilizar o chalk versão 4.1.2 para evitar erros ao utilizar o require que será apresentado durante o curso, para isso instarlar ele pelo terminar da sequinte forma `npm install chalk@4.1.2` assim será instalada a versão exata declarada;
- Modulos são scripts reaproveitáveis. Internos: módulos que são desenvolvidos pelo proprio desenvovedor; Core modules: módulos que vem com o Node.js; Externos: módulos que são instalados via npm;
- Para utilizar modulos internos que criamos durante o desenvolvimento tempos de utilizar o module.exports para exportar e o import ou require para importar o modulo;
- Para utilizar o export import os arquivos precisam ser na extensão nomeDoArquivo.mjs;
- O uso de leitura de argumentos quando execultado um arquivo js com node. `process.argv` ao executar o arquivo `node arquivo.js` informar o argumento por exemplo `nome=Rogerio`;
- Como iniciar um projeto com o comando `npm init` e como instalar modulos externos com o comando `npm install nomeDoPacote` no curso usamos o `npm install minimist`, para usar ele no arquivo declara-se da seguinte forma `const minimist = require('minimist)`;
- Uso do console e suas funções e modulos possui alguns exemplos no arquivo _index.js_ na pasta **7 explorando console**;
- A biblioteca chalk é utilizada para mudar do texto no console;
- Tarefa da seção 2 realizar um script que pergute ao usuário qual o seu nome e a idade e imprimir na tela a mensagem com fundo em amarelo e o texto em preto;

### Seção 3

- Nesta seção será apresentado o uso de Core Módulos como Http, path, fs, url;
- Como utilizar o http para criar servidores, para cancelar o servico no terminal basta precionar **CTRL + C**;
- Orientação de como atualizar a página quando o server está em execução, precisa para o serviço e iniciar novamente. Como utilizar o medo http em conjunto com o metodo url para receber valores e interagir com o usuário;
- Utiliznado o fs para enviar arquivos htmls para a página assim pode ser escrito as tags html em um arquivo e enviado diretamente, sem a necessidade de digitar as tags no arquivo de script;
- Como utilizar o writeFile para escrever em arquivos;
- Como utilizar o appendFile para atualizar informações no arquivo;
- Como utilizar o unlink para apagar arquivos com o module fs;
- Como utilizar o rename para renormear arquivos com o module fs;
- Como criar rotas utilizando o module fs criando paginas de navegação;
- Como obter dados de um arquivo utilizando o metodo stat do module fs;
- Como obter um caminho de um arquivo e criar caminhos para encontrar ou salvar arquivos utilizando o module fs;

### Seção 4 [![My Skills](https://skillicons.dev/icons?i=npm)](https://skillicons.dev)

- Nesta seção são explicados os fundamentos do `NPM` e aprofundar um pouco mais;
- Para criar um novo projeto no npm você utiliza o comando `npm init`;
- Para iniciar um projeto de uma maneira mais rápida pode digitar o comando `npm init -y` assim ele inicia o projeto respondendo as perguntas com os dados defaut;
- Para instalar pacotes usa o comando `npm install <nomeDoPacote>`, uma boa prática e sempre colocar a pasta node_modules em um arquivo **.gitignore**;
- Para encontar os modules do npm eles ficam no site [https://www.npmjs.com/](https://www.npmjs.com/);
- Para instalar pacotes somente em modo de desenvolvimento utiliza o comando `npm install <nomeDoPacote> --save-dev` assim o pacote só será usado durante o desenvolvimento;
- Para atualizar um pacote do npm utiliza o comando `npm update` podendo informa o nome do pacote ou sem o nome para atualizar todos os pacotes do projeto;
- O NPM permite criar scripts para execurtar o programa ou realizar algum teste de maneira mais agil, como por exemplo `"start":"node index.js"`;
- Para instalar um pacote de forma global que fica salvo no computador em vez do projeto utiliza o comando `npm install <nomeDoPacote> -g` o -g se refere a inslação global. Alguns pacotes instalados de forma global precisa ser usado o comando `npm link <nomeDoPacote>` para poder utilizar ele no projeto;
- O `npx` é utlizado para execultar codigos diretamente no terminal, como por exemplo o modulo **cowsay**: `npx cowsay "Hello World"` ou `npx cowsay -d "morri"`;
- O comando `npm uninstall <nomeDoPacote>` serve para remover o pacote do do projeto e remover seu arquivos do diretório quando instalados;

### Seção 5 - _Projeto conta bancária_

- Nesta seção será desenvovido um projeto de conta bancária utilizando node.js no terminal;
- Para testar a aplicação basta clicar no link abaixo:
  [![Run on Replit](https://replit.com/badge/github/username/repo-name)](https://replit.com/@rocordeirosilva/Projeto-conta-bancaria)

### Seção 6 - _Framework Express_ [![My Skills](https://skillicons.dev/icons?i=express)](https://skillicons.dev)

- Está seção tem por finalidade aprender como utilizar o express para criar rotas e criar aplicações de maneira mais simplificada, utilizando rodas e renderizando html com conexão com banco de dados;
- Para fazer o uso do _express_ em um projeto basta usar o comando `npm installl express`;
- Criando a primeira rota e iniciando um aplicação com express utilizando get e listen;
- Uso do metodo sendFile do express para chamar arquivos html;
  -Uso do nodemon para atualizar a pagina assim que realizar alterações no arquivo html;
- Uso de middleware para controle de acesso a rotas e verificações;
- Obter dados da url usam o params para obter os dados enviados via url
- Realizar post de dados via express;
- A pasta 09 possui todo o restante do curso devido a quantidade de arquivos e dados para diminuir ficar criando novas pastas;
- Uso do Router do express para criar as rotas exemplo usado com a rota users;
- Uso do css com express para estilizar a página com o uso da chamada `express.static('public')`;
- Como criar uma página 404 caso a rota não exista;
- Final da seção foi criado uma tarefa para fazer 2 páginas alterando o plano de fundo delas, fonte e cor das letras. Projeto está na pasta secao6/10_tafera_secao6;

### Seção 7 - _Template Engine com Express_ [![My Skills](https://skillicons.dev/icons?i=express)](https://skillicons.dev)

- Templete Engine são formas de deixar o html dinâmico ele é essecial para usar banco de dados para projetos que não sejam estáticos;
- Handlebars um template engines para incluir dados dinâmicos no HTML utilizando `{{{}}}` para serem impressos;
- um ponto de atenção durante o curso é a forma de utilizar o Handlebars foi alterada, para funcionar corretamente precisa utiliza-lo desta forma `app.engine('handlebars', exphbs.engine())`;
- Primeira aplicação utilizando o handlebars para carregar os arquivos da views;
  -Uso da sintase `{{{body}}}` para carregar html atraves do layouts;
