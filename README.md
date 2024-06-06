# Desafio - Tasklist

Este um projeto de uma aplicação de gerenciamento de tarefas. Ele oferece uma API RESTful para criar, visualizar, atualizar e excluir tarefas.
Onde utilizei o NodeJS para o Backend, ReactJS para o Frontend e o MongoDB para o Banco de Dados.

## Backend - Instruções de Configuração e Execução:

1. Certifique-se de ter o Node.js e o MongoDB instalado em sua máquina.
  Para verificar utilize o comando:
```
node -v
npm -v
```
Caso não tenha instalado acesse o site oficial: 
[NodeJS Download](https://nodejs.org/en/download/current)

2. Clone este repositório usando o comando:
```
git clone https://github.com/thfields/3x-web.git
```
3. Instale as dependências acessando o diretório `Backend` e usando o npm:
```
cd Backend
npm install
```
4. Crie um arquivo `.env` no diretório Backend e adicione a URL de conexão com o MongoDB:
```
URL_DATABASE = "mongodb+srv://admin:admin@cluster0.6f3i2ax.mongodb.net/task?retryWrites=true&w=majority&appName=Cluster0"
```
5. Inicie o servidor usando o comando:
```
npm start
```

## Frontend - Instruções de Configuração e Execução:

1. Instale as dependências do Frontend acessando o diretório `Frontend` e usando o npm:
```
cd Frontend
npm install
```
2. Inicie o Frontend da aplicação usando o comando:
```
npm run dev
```

# Descrição dos Endpoints

### Endpoint: `/tasks`

#### Método: GET
- Descrição: Retorna todas as tarefas cadastradas.
- Como usar: Faça uma requisição GET para `/tasks`.

#### Método: POST
- Descrição: Cria uma nova tarefa.
- Parâmetros:
  - `titulo`: Título da tarefa (obrigatório).
  - `descricao`: Descrição da tarefa (obrigatório).
  - `prioridade`: Prioridade da tarefa (obrigatório). Deve ser `"baixa"`, `"média"` ou `"alta"`.
  - `status`: Status da tarefa (obrigatório). Deve ser `"aberto"` ou `"em andamento"`.
- Como usar: Faça uma requisição POST para `/tasks`, enviando os parâmetros no corpo da requisição.

### Endpoint: `/tasks/:taskId`

#### Método: GET
- Descrição: Retorna uma tarefa específica com base no ID fornecido.

- Como usar: Faça uma requisição GET para `/tasks/:taskId`, substituindo `:taskId` pelo ID da tarefa desejada.

#### Método: PUT
- Descrição: Atualiza uma tarefa existente com base no ID fornecido.
- Parâmetros:
  - `titulo`: Novo título da tarefa.
  - `descricao`: Nova descrição da tarefa.
  - `prioridade`: Nova prioridade da tarefa. Deve ser `"baixa"`, `"média"` ou `"alta"`.
  - `status`: Novo status da tarefa. Deve ser `"aberto"`, `"em andamento"` ou `"finalizado"`.
- Como usar: Faça uma requisição PUT para `/tasks/:taskId`, enviando os parâmetros a serem atualizados no corpo da requisição.

#### Método: DELETE
- Descrição: Deleta uma tarefa existente que está com o status `"finalizado"` com base no ID fornecido.
- Parâmetros:
  - `taskId`: ID da tarefa a ser deletada (obrigatório).
- Como usar: Faça uma requisição DELETE para `/tasks/:taskId`, substituindo `:taskId` pelo ID da tarefa a ser deletada.

Certifique-se de incluir os parâmetros necessários e observar as restrições definidas para cada operação.

## Testes do Insomnia
Você pode encontrar os testes do Insomnia no arquivo `3x-web_insomnia_request.json`. Importe este arquivo para o seu cliente Insomnia para testar os endpoints facilmente.
