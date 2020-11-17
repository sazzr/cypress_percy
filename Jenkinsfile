pipeline {
    agent any
    stages {
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Cypress') {
            steps {
                sh 'npm run preTest'
            }
        }
        stage('Browserstack') {
            steps {
                sh 'npm install browserstack-cypress-cli'
                sh 'npm run browserstack'
            }
        }
        stage('Percy') {
            steps {
                sh 'npm run percy'
            }
        }
    }
    post ('Reports'){
        always {
            junit 'results/*.xml'
        }
    }
}