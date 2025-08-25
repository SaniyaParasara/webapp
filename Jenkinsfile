pipeline {
    agent any

    stages{
        stage('checkout') {
            steps{
                git branch: 'main',
                credentialsId: 'your_git_credentials',
                url: ''
            }
        }

        stage('build') {
            steps {
                echo'building the application...'
            }
        }

        stage('test') {
            steps {
                echo'Runnig tests...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
            }
        }
    }
post {
    success{
        echo 'Pipeline completed successfully!'
    }
    failure {
        echo 'Pipeline failed. check logs.'
    }
}
}