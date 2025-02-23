# NLW Connect - Software de Indicação para Eventos

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Projeto desenvolvido durante a **NLW Connect**, realizada de **17 a 23 de fevereiro de 2025** — uma semana intensiva de aprendizado e desenvolvimento. Este software de indicação para eventos permite que os usuários acessem seus ingressos, gerem links de convite, acompanhem cliques e cadastros realizados por meio desses links e visualizem sua posição no ranking de indicações.

## 🚀 Funcionalidades

- **Formulário de Inscrição:** Permite que o usuário se inscreva no evento.
- **Link de Convite:** Após a inscrição, é gerado um link único para convidar outras pessoas.
- **Estatísticas de Convites:**
  - Número de cliques no link de convite.
  - Número de pessoas cadastradas através do link.
  - Posição atual no ranking de indicações.
- **Ranking de Indicações:** Exibe os três primeiros colocados no ranking.

## 🛠️ Tecnologias Utilizadas

### Back-End
- **Node.js:** Ambiente de execução JavaScript.
- **Fastify:** Framework web rápido e eficiente.
- **TypeScript:** Tipagem estática para maior segurança e produtividade.
- **Drizzle ORM:** ORM moderno para interação com o banco de dados.
- **Zod:** Validação de dados com TypeScript.
- **Docker:** Contêinerização dos serviços de PostgreSQL e Redis.
- **Swagger:** Documentação da API.

### Front-End
- **React:** Biblioteca para construção de interfaces de usuário.
- **Next.js:** Framework React com suporte a SSR e SSG.
- **TypeScript:** Tipagem estática para o front-end.
- **Tailwind CSS:** Framework CSS utilitário para estilização.
- **React Hook Form:** Gerenciamento de formulários.
- **Orval:** Geração de clientes HTTP para APIs.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (v20 ou superior)
- [Docker](https://www.docker.com/) (para rodar o PostgreSQL e o Redis)
- [Git](https://git-scm.com/) (para clonar o repositório)

## 💻 Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente.

### 1. Clone o repositório
```bash
  git clone https://github.com/kvfranco/nlw_connect.git
  cd nlw_connect
```

### 2. Configurando o Back-End
```bash
  cd backend
  npm install
  docker compose up -d  # Baixa as imagens e cria os containers do PostgreSQL e Redis
  docker ps             # Verifique se os containers estão rodando
  npm run dev
```

> **Atenção:** O arquivo `.env` possui as configurações padrão para execução local. Altere conforme necessário.

### 3. Configurando o Front-End
```bash
  cd ../frontend
  npm install
  npm run dev
```

### 4. Acesse a Aplicação
A aplicação estará acessível em:
- [http://localhost:3000](http://localhost:3000)

### 5. Documentação da API

As rotas da API estão documentadas no Swagger, acessível em:
- [http://localhost:3333/docs](http://localhost:3333/docs)
