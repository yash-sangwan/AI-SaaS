# Main Entry App for Microservices Backend

This is the main entry point for the microservices backend application, which handles routing between various services (pods) and manages authentication for the entire system. It acts as the API gateway and ensures secure communication across the services.

## Table of Contents

1. [Introduction](#introduction)
2. [Setup](#setup)
3. [Local Deployment](#local-deployment)
4. [Docker Commands](#docker-commands)

## Introduction

The main entry app serves as a gateway for routing requests to different microservices in the system. It performs several important tasks, including:

- **Routing**: It routes requests to the appropriate service.
- **Authentication**: It ensures that only authenticated users can access certain routes and services.
- **Authorization**: It enforces access control rules to ensure that users can only access resources they are authorized to.
- **API Gateway**: Aggregates and forwards requests to other services, reducing the complexity for consumers of the API.

The app is built using TypeScript and Express.js, and is designed to be part of a larger Kubernetes-based microservices architecture.

## Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Version 20 or higher)
- [Docker](https://www.docker.com/) (for containerization, optional)
### Clone the Repository

First, clone the repository to your local machine:

```bash
# Clone the repository
git clone https://github.com/Rakesh-46-VR/AI-SaaS.git
cd backend

# Install dependencies for the service
cd app && npm install
```

## Local Deployment
Navigate to the folder to start the particular service:

```bash
npm run dev
```

## Docker Commands

### Building the Docker Image

To build the Docker image for the main entry app, use the following command from the root of the app folder:

```bash
docker build -t app:latest .
```

This command will create a Docker image tagged main-service:latest using the Dockerfile in the main-service folder.

### Running the Docker Container
```bash
docker run -p 3000:3000 app:latest
```