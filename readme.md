# Documentando a API
Criar pasta para aplicação:
```
mkdir NomeDaPasta
```
Acessar a pasta:
```
cd NomeDaPasta
```
Criar arquivo para a documentação do projeto:
```
touch readme.md
```
Iniciar o gerenciador de pacotes Node:
```
npm init -y
```
Instalar os pacotes express e dotenv:
```
npm i express nodemon dotenv
```
Abra o VSCode:
```
code .
```
Criar arquivo gitignore:
```
nano .gitignore
```
Adicione no arquivo .gitignore o nome da pasta criada após a instalação dos pacotes:
```
node_modules
```
Criar estrutura de arquivos e pastas:
```
mkdir src
```
Criar arquivos dentro da pasta src:
```
touch src/app.js
```
Arquivo responsável de criar a configuração da API, server.js:
```
touch src/server.js
```
Criar pastas dentro da pasta src:
```
mkdir src/config
```
Criar pasta para gerenciar a conexão com o banco de dados:
```
mkdir src/controllers
```
Pasta para gerenciar as requisições das rotas e conexão com banco de dados:
```
mkdir src/routes
```
Enviar estrutura do projeto para o gitHub:
```
git init
```
Verificar config:
```
git config -l
```
Se der erro:
- Informar seu nome e email
- Altere o campo 'FIRST_NAME' e coloque seu nome
- Altere o campo ' EMAIL@EXAMPLE.COM ' e coloque seu email no gitHub
```
git config --global user.name "FIRST_NAME"

 git config --global user.email "EMAIL@EXAMPLE.COM"
```
Verifique os arquivos que serão enviados ao gitHub:
```
git status
```
Adicionar todos os arquivos ao versionamento:
```
git add .
```
Salvar projeto e escrever comentário sobre o processo realizado:
```
git commit -m 'estrutura do projeto'
```
- Criar um novo repositório no gitHub
- Clique no ponto indicado na imagem para copiar a URL do repositório

De volta ao terminal, execute o comando para definir o branch main:
```
git branch -M main
```
- Informar o repositório que queremos enviar os arquivos
- Colar a URL do seu repositório do GitHub copiado
```
git remote add origin COLAR_URL
```
Enviar os arquivos para o gitHub:
```
git push -u origin main
```
Após enviar para o gitHub pode-se remover os arquivos da nossa máquina:
```
cd ..
```
- Comando para acessar uma pasta anterior
- Fechando o VSCode com o projeto aberto
```
rm -rf projetoBackend
```
# Passo 2:

Copiar a url do projeto
- Acessar repositório do projeto no gitHub
- Clicar no botão verde '<> Code'
- Clicar no ícone para copiar a URL, conforme a imagem

Clonar o repositório na sua máquina
- Abrir o gitBash em um local do computador
- Digitar o comando 'git clone' junto com a URL do seu repositório
```
git clone URL_REPOSITORIO
```
Acessar pasta
- Digitar o comando 'cd' e o nome do seu repositório
- cd (change directory): acessar outra pasta
```
cd NOME_REPOSITORIO
```
Reinstalar os pacotes da aplicação
```
npm i
```
- Criar arquivo .env na raiz do projeto
Este arquivo é utilizada para armazenar as variáveis que serão reutilizadas na aplicação
- Com o comando nano, podemos criar e editar um arquivo pelo terminal
  - Ctrl + o: Salvar o arquivo
  - Enter: Confirmar
  - Ctrl + x: Fechar o arquivo
```
nano .env
```
Digitar no arquivo .env
```
PORT = 3008
```
Adicionar arquivo .env no .gitignore
```
nano .gitignore
.env
```
Abrir o VSCode
```
code .
```
Criar arquivo de exemplo para para as variáveis necessárias da aplicação
```
nano .env.example
```
Adicionar no arquivo .env.example
```
PORT = 
```
Abrir o arquivo app.js e digitar o código

- Importar o pacote express (servidor)
```
const express = require('express');
```
- Importar o pacote dotenv, gerenciador de variáveis de ambiente
```
const dotenv = require('dotenv').config();
```
- Instanciar o express na variável app
```
const app = express();
```
- Setar a porta do servidor a partir do arquivo .env
- O operador condicional '||' significa 'OU', caso não tenha a variável PORT, será utilizado o valor '3333'
```
app.set('port', process.env.PORT || 3333);
```
- Exportar as configurações na variável app
```
module.exports = app;
```
Abrir o arquivo server.js e digitar os códigos
- Importar o arquivo app
```
const app = require('./app');
```
- Importar a porta do servidor
```
const port = app.get('port');
```
Testar API com a função listen
- 1º parâmetro: passamos a porta do servidor
- 2º parâmetro: arrow function para retornar um console informando a porta que está rodando o servidor
```
app.listen(port, () => {
    console.log(`Running on port ${ port }!`);
});
```
### Depois de configurar os pacotes e o teste do servidor, vamos criar o comando para executar
Abrir o arquivo package.json e alterar a chave 'scripts'
- Substituir o comando 'test' pelo comando 'start' na linha 7
```
"start":"nodemon src/server.js"
```
Rodar o comando no termial com gitBash
```
npm run start
```
Atualizar projeto no gitHub
- Adicionar todos arquivos ao versionamento
```
git add .
```
- Salvar projeto e escrever comentário sobre o processo realizado
```
git commit -m 'configuração do projeto'
```
- Enviar os arquivos atualizados para o gitHub
```
git push
```
# Passo 3:
Copiar a url do projeto:
- Acessar repositório do projeto no gitHub
- Clicar no botão verde '<> Code'
- Clicar no ícone para copiar a URL, conforme a imagem

Clonar o repositório na sua máquina:
- Abrir o gitBash em um local do computador
- Digitar o comando 'git clone' junto com a URL do seu repositório
```
git clone URL_REPOSITORIO
```
Acessar pasta
- Digitar o comando 'cd' e o nome do seu repositório
- cd (change directory): acessar outra pasta
```
cd NOME_REPOSITORIO
```
Reinstalar os pacotes da aplicação:
- Este comando irá recriar a pasta node_modules no projeto
```
npm i
```
Criar pastas dentro da pasta src:
```
mkdir src/routes
```
Criar arquivo dentro da pasta routes:
- Responsável pelas rotas que serão acessadas na API
```
touch src/routes/rotas.js
```
Abrir o VSCode:
```
code . 
```
Abrir o arquivo rotas.js e digitar os códigos:
```
// Importar o modulo de Router do express
const { Router } = require('express');

// Instanciar o Router na variável router
const router = Router();

router.get('/listar', (request, response) => {
    response.send('Método GET: listar informações');
});
router.post('/cadastrar', (request, response) => {
    response.send('Método POST: salvar informações');
});
router.put('/user/:id', (request, response) => {
    response.send('Método PUT: atualizar informações');
});
router.delete('/user/:id', (request, response) => {
    response.send('Método DELETE: remover informações');
});

module.exports = router;
```
Abrir o arquivo app.js e adicionar o código:
- Precisamos importar o arquivo de rotas nas configurações da API


- Habilitar as rotas na aplicação
- Esta linha deve inserida depois da criação da variável app
```
app.use('/api', router);
```
Atualizar projeto no gitHub:
- Adicionar todos arquivos ao versionamento
```
git add .
```