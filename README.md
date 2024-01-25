# Seach Organic

Documentação de Login e Registro

## Visão Geral

Este documento abrange os componentes de login e registro de uma aplicação React, detalhando endpoints, configuração do JSON Server e validações de formulário.

## Configuração do JSON Server

- Instale o JSON Server: `npm install -g json-server`.
- Crie `db.json` com array de usuários.
- Execute: `json-server --watch db.json --port 3001`.

## Endpoints

### Registro

- **POST** `/users`: Registra um novo usuário.

### Login

- **GET** `/users?email={email}&password={password}`: Autentica um usuário.

## Validações

### Formulário de Registro

- Nome, Data de Nascimento, Telefone, CPF: Obrigatórios.
- Email: Obrigatório, formato válido.
- Senha: Obrigatória, mínimo 8 caracteres.
- Confirmação de Senha: Obrigatória, deve coincidir com a senha.

### Formulário de Login

- Email: Obrigatório, formato válido.
- Senha: Obrigatória.

## Uso

### Registro

Preencha o formulário e submeta. Um `POST` será enviado para `/users`.

### Login

Insira email e senha. Um `GET` será feito para `/users`.

## Notas

- JSON Server é apenas para desenvolvimento.
- Validações no frontend complementam, mas não substituem medidas de segurança no backend.
