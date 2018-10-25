pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'sudo make build hub_pass=${HUB_PASS}'
            }
        }
    }
  }
  environment {
    HUB_PASS = '392425595llr'
  }
}