# Microservices Backend Application

This project is a microservices-based backend built using TypeScript and Express. Each service is designed to be independent and can be deployed separately or together. The **app** folder acts as the entry point for the entire backend.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Setup](#setup)
4. [Running Locally](#running-locally)
6. [Environment Variables](#environment-variables)
5. [Building and Deploying with Docker and Kubernetes Cluster](#building-and-deploying-with-docker) (Comming soon..)

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Version 20 or higher)
- [Docker](https://www.docker.com/) (For containerization, optional)
- [Kubernetes](https://kubernetes.io/) (For orchestration, optional)

## Project Structure

/backend <br>
&emsp;&emsp;&emsp;└── /app # Entry point for the backend application <br>

## Setup

Clone the repository and install dependencies for each service:

```bash
# Clone the repository
git clone https://github.com/Rakesh-46-VR/AI-SaaS.git
cd backend

# Install dependencies for each service 
cd app && npm install
```

## Environment Variables
Each service may require environment variables. You can create an .env file in the root of each service folder. 
The .env.example file has the details.

## To start a service
Navigate to the folder to start the particular service:

```bash
npm run dev
```