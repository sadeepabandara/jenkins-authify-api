# Jenkins Authify API

A simple Node.js API with authentication features designed to demonstrate a full CI/CD pipeline using Jenkins.

---

## 📂 Project Structure

-   `src/` – App source code (routes, controllers, server)
-   `tests/` – Jest test cases
-   `Dockerfile` – Container build config
-   `Jenkinsfile` – CI/CD pipeline definition

---

## Features

-   Register and log in users
-   Password hashing with bcrypt
-   Unit tests using Jest and Supertest
-   ESLint for code quality
-   Dockerfile for containerization
-   Jenkinsfile for CI/CD pipeline

---

## Tech Stack

-   Node.js
-   Express
-   Jest
-   ESLint
-   Docker
-   Jenkins

---

## Getting Started

1. Clone the repo:

```bash
git clone https://github.com/sadeepabandara/jenkins-authify-api.git
cd jenkins-authify-api
npm install
```

### Running the Application

```bash
npm start
```

The API will run on http://localhost:3000

## ✅ Running Tests

```bash
npm test
```

## 🧹 Linting

```bash
npm run lint
```

## 🛠️ Jenkins Pipeline Overview

The Jenkinsfile includes the following stages:

1. Checkout – Clones the Git repository.
2. Install Dependencies – Installs all npm packages.
3. Lint – Runs ESLint on the `src` directory.
4. Run Tests – Executes Jest test cases.
5. Security Audit – Performs `npm audit` to check for vulnerabilities.
6. Build Docker Image – Builds the application into a Docker image.
7. Deploy (Test Env) – Deploys the Docker container locally.
8. Release – Tags the current build as `v1.0.0`.
9. Monitoring – Simulates a monitoring step.

**You can find the full pipeline script in Jenkinsfile.**

## 🐳 Docker

To build and run the container:

```bash
docker build -t jenkins-authify-api .
docker run -d -p 3000:3000 --name authify-test jenkins-authify-api
```

## ✍️ Author

Sadeepa Bandara Marasinghe Mudiyanselage
S224779675
Deakin University – SIT753
Trimester 1, 2025
