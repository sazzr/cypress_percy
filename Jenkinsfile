pipeline {
    agent any
    stages {
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Cypress and Perrcy') {
            steps {
                sh 'rm results/*'
                sh 'npm run percy'
            }
        }
        stage('Browserstack') {
            steps {
                sh 'npm install browserstack-cypress-cli'
                sh 'npm run browserstack'
            }
        }
    }
    post ('Reports'){
        always {
            junit 'results/*.xml'
        }
    }
}
