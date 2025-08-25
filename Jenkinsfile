pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'your_git_credentials',
                    url: 'https://github.com/SaniyaParasara/webapp.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Example: run container
                
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs.'
        }
    }
}
