# Curso Node.js do Zero ao Avançado

# Linguagens utilizadas durante o curso

[![My Skills](https://skillicons.dev/icons?i=html,css)](https://skillicons.dev) &emsp; [![My Skills](https://skillicons.dev/icons?i=js)](https://skillicons.dev) &emsp; [![My Skills](https://skillicons.dev/icons?i=nodejs)](https://skillicons.dev) &emsp; [![My Skills](https://skillicons.dev/icons?i=npm)](https://skillicons.dev)

## Seção 1

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

## Seção 2

- Utilizar o chalk versão 4.1.2 para evitar erros ao utilizar o require que será apresentado durante o curso, para isso instarlar ele pelo terminar da sequinte forma `npm install chalk@4.1.2` assim será instalada a versão exata declarada;

- Modulos são scripts reaproveitáveis. Internos: módulos que são desenvolvidos pelo proprio desenvovedor; Core modules: módulos que vem com o Node.js; Externos: módulos que são instalados via npm;

- Para utilizar modulos internos que criamos durante o desenvolvimento tempos de utilizar o module.exports para exportar e o import ou require para importar o modulo;

- Para utilizar o export import os arquivos precisam ser na extensão nomeDoArquivo.mjs;

- O uso de leitura de argumentos quando execultado um arquivo js com node. `process.argv` ao executar o arquivo `node arquivo.js` informar o argumento por exemplo `nome=Rogerio`;

- Como iniciar um projeto com o comando `npm init` e como instalar modulos externos com o comando `npm install nomeDoPacote` no curso usamos o `npm install minimist`, para usar ele no arquivo declara-se da seguinte forma `const minimist = require('minimist)`;

- Uso do console e suas funções e modulos possui alguns exemplos no arquivo _index.js_ na pasta **7 explorando console**;

- A biblioteca chalk é utilizada para mudar do texto no console;

- Tarefa da seção 2 realizar um script que pergute ao usuário qual o seu nome e a idade e imprimir na tela a mensagem com fundo em amarelo e o texto em preto;

## Seção 3

- Nesta seção será apresentado o uso de Core Módulos como Http, path, fs, url;

- Como utilizar o http para criar servidores, para cancelar o servico no terminal basta precionar **CTRL + C**;

- Orientação de como atualizar a página quando o server está em execução, precisa para o serviço e iniciar novamente.
