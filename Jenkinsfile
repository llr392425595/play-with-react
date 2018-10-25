pipeline {
<<<<<<< HEAD
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'make build hub_pass=${HUB_PASS}'
      }
=======
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'sudo make build hub_pass=${HUB_PASS}'
            }
        }
>>>>>>> try to use sudo
    }
  }
  environment {
    HUB_PASS = '392425595llr'
  }
}