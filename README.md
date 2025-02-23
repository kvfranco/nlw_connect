# NLW Connect - Event Referral Software

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

📄 [Leia em Português](README.pt-BR.md)

Project developed during **NLW Connect**, held from **February 17 to 23, 2025** — an intensive week of learning and development. This event referral software allows users to access their tickets, generate invitation links, track clicks and sign-ups through these links, and view their position on the referral leaderboard.

## 🚀 Features

- **Registration Form:** Allows users to register for the event.
- **Invitation Link:** A unique link is generated after registration to invite others.
- **Invitation Statistics:**
  - Number of clicks on the invitation link.
  - Number of people who signed up through the link.
  - Current position on the referral leaderboard.
- **Referral Leaderboard:** Displays the top three users on the leaderboard.

## 🛠️ Technologies Used

### Back-End

- **Node.js:** JavaScript runtime environment.
- **Fastify:** Fast and efficient web framework.
- **TypeScript:** Static typing for enhanced safety and productivity.
- **Drizzle ORM:** Modern ORM for database interaction.
- **Zod:** Data validation with TypeScript.
- **Docker:** Containerization of PostgreSQL and Redis services.
- **Swagger:** API documentation.

### Front-End

- **React:** Library for building user interfaces.
- **Next.js:** React framework with SSR and SSG support.
- **TypeScript:** Static typing for the front-end.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **React Hook Form:** Form management.
- **Orval:** HTTP client generation for APIs.

## 📋 Prerequisites

Before starting, make sure you have installed:

- [Node.js](https://nodejs.org/) (v20 or later)
- [Docker](https://www.docker.com/) (to run PostgreSQL and Redis)
- [Git](https://git-scm.com/) (to clone the repository)

## 💻 How to Run the Project

Follow the steps below to set up and run the project locally.

### 1. Clone the Repository

```bash
  git clone https://github.com/kvfranco/nlw_connect.git
  cd nlw_connect
```

### 2. Setting up the Back-End

```bash
  cd backend
  npm install
  docker compose up -d  # Download images and create PostgreSQL and Redis containers
  docker ps             # Check if the containers are running
  npm run dev
```

> **Note:** The `.env` file contains the default settings for local execution. Modify as needed.

### 3. Setting up the Front-End

```bash
  cd ../frontend
  npm install
  npm run dev
```

### 4. Access the Application

The application will be available at:

- [http://localhost:3000](http://localhost:3000)

### 5. API Documentation

The API routes are documented in Swagger, accessible at:

- [http://localhost:3333/docs](http://localhost:3333/docs)

## 📜 Certificates  
- [Back-End Development - NLW Connect](https://app.rocketseat.com.br/certificates/3f99ec15-9cc3-4525-900c-872c29b1db72)  
- [Front-End Development - NLW Connect](https://app.rocketseat.com.br/certificates/eb7b4a4b-01c9-486f-b1eb-a717bcb17298)