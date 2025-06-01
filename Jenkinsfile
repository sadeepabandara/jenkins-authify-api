pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/sadeepabandara/jenkins-authify-api.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint (Code Quality)') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Security Audit') {
            steps {
                sh 'npm audit --audit-level=low || true'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t jenkins-authify-api .'
            }
        }

        stage('Deploy (Test Env)') {
            steps {
                sh '''
      docker rm -f authify-test || true
      docker run -d -p 3000:3000 --name authify-test jenkins-authify-api
    '''
            }
        }

        stage('Release (Tag in Git)') {
            steps {
                sh 'git tag v1.0.0 || true'
                sh 'git push origin v1.0.0 || true'
            }
        }

        stage('Monitoring') {
            steps {
                sh 'echo "Simulating monitoring step: logs, metrics, alerts..."'
            }
        }
    }
}
