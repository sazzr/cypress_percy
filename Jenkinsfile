pipeline {
    agent any

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('cypress Tests') {
            steps {
                sh 'npm run preTest'
            }
        }
    }
    post ('reports'){
        always {
            junit 'results/cypress-report.xml'
        }
    }
}