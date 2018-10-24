pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'make build hub_pass=${HUB_PASS}'
            }
        }
    }
}