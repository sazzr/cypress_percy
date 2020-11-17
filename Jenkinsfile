pipeline {
    agent any
    stages {
        stage('Dependencies') {
            steps {
                sh 'rm -f results/*'
                sh 'npm install'
            }
        }
        stage('Cypress and Percy') {
            steps {
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
