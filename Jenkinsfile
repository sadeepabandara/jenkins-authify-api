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

        stage('Release (Deploy with CodeDeploy)') {
            steps {
                withAWS(region: 'us-east-1', credentials: 'aws-jenkins-creds') {
                    sh '''
        zip -r app.zip * -x "node_modules/*"
        aws s3 cp app.zip s3://jenkins-authify-deployments/app.zip

        aws deploy create-deployment \
          --application-name jenkins-authify-api \
          --deployment-group-name prod-group \
          --s3-location bucket=jenkins-authify-deployments,key=app.zip,bundleType=zip
      '''
                }
            }
        }

        stage('Monitoring') {
            steps {
                sh 'echo "Simulating monitoring step: logs, metrics, alerts..."'
            }
        }
    }
}
