# AppPremium - Sistema de Gestão Automotiva

Este repositório contém o código-fonte do sistema de gestão automotiva AppPremium, que inclui um backend desenvolvido com NestJS e um frontend construído com React.

## Estrutura do Projeto

O projeto é dividido em três partes principais:

- `backend/`: Contém a aplicação NestJS (API).
- `frontend/`: Contém a aplicação React (interface do usuário).
- `flask-wrapper/`: Um wrapper Flask para servir o backend NestJS e o frontend estático, facilitando o deploy.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (versão 18 ou superior)
- npm (gerenciador de pacotes do Node.js)
- pnpm (gerenciador de pacotes, utilizado no frontend)
- Docker e Docker Compose (para o banco de dados PostgreSQL)
- Python (versão 3.11 ou superior) e pip (para o Flask wrapper)

## Configuração e Execução Local

Siga os passos abaixo para configurar e executar o projeto localmente.

### 1. Configuração do Banco de Dados (PostgreSQL com Docker)

1.  Navegue até o diretório `backend/`:
    ```bash
    cd apppremium/backend
    ```
2.  Crie um arquivo `.env` na raiz do diretório `backend/` com as seguintes variáveis de ambiente:
    ```
    DATABASE_URL="postgresql://user:password@localhost:5432/apppremium_db?schema=public"
    ```
    *Ajuste `user`, `password` e `apppremium_db` conforme necessário.*

3.  Inicie o contêiner do PostgreSQL usando Docker Compose (assumindo que você tenha um `docker-compose.yml` configurado para o PostgreSQL no diretório `backend/` ou um banco de dados PostgreSQL já em execução e acessível).
    *Se você não tiver um `docker-compose.yml`, pode iniciar um contêiner PostgreSQL manualmente ou usar um serviço de banco de dados local.*

    Exemplo de `docker-compose.yml` (se necessário, crie este arquivo em `apppremium/backend/`):
    ```yaml
    version: '3.8'
    services:
      db:
        image: postgres:13
        restart: always
        environment:
          POSTGRES_USER: user
          POSTGRES_PASSWORD: password
          POSTGRES_DB: apppremium_db
        ports:
          - "5432:5432"
        volumes:
          - pgdata:/var/lib/postgresql/data
    volumes:
      pgdata:
    ```
    Para iniciar o banco de dados:
    ```bash
    docker-compose up -d
    ```

### 2. Backend (NestJS)

1.  Navegue até o diretório `backend/`:
    ```bash
    cd apppremium/backend
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Execute as migrações do Prisma e gere o cliente Prisma:
    ```bash
    npx prisma migrate dev --name init
    npx prisma generate
    ```
4.  Inicie o servidor de desenvolvimento do backend:
    ```bash
    npm run start:dev
    ```
    O backend estará disponível em `http://localhost:3000` (ou a porta configurada no `.env`).

### 3. Frontend (React)

1.  Navegue até o diretório `frontend/`:
    ```bash
    cd apppremium/frontend
    ```
2.  Instale as dependências usando pnpm:
    ```bash
    pnpm install
    ```
3.  Inicie o servidor de desenvolvimento do frontend:
    ```bash
    pnpm dev
    ```
    O frontend estará disponível em `http://localhost:5173` (ou a porta padrão do Vite).

### 4. Flask Wrapper (Opcional, para Deploy)

Este wrapper é usado para servir o frontend estático e proxy as requisições para o backend NestJS, facilitando o deploy em ambientes que suportam Python/Flask.

1.  Navegue até o diretório `flask-wrapper/`:
    ```bash
    cd apppremium/flask-wrapper
    ```
2.  Crie e ative um ambiente virtual Python:
    ```bash
    python3.11 -m venv venv
    source venv/bin/activate
    ```
3.  Instale as dependências:
    ```bash
    pip install -r requirements.txt
    ```
4.  Certifique-se de que o backend NestJS esteja rodando (passo 2.4) e que o frontend React tenha sido construído (passo 3.3, `pnpm build` no diretório `frontend/`).
5.  Inicie o servidor Flask:
    ```bash
    flask run
    ```
    O Flask wrapper estará disponível em `http://localhost:5000` (ou a porta padrão do Flask), servindo o frontend e redirecionando as chamadas de API para o backend NestJS.
