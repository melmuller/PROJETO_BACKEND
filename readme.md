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