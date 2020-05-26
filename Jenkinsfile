pipeline {
    agent any
	
    environment{
        JENKINS_NODE_COOKIE = 'dontkillmeplease'
        PORT=5000
    }
    stages {
        stage('Preparation') { // for display purposes
            steps {
              // clean out the workspace
              cleanWs()
            }
        }        
        stage('Download') {
           steps {
              // Download code from a GitHub repository
              // branch: the branch that you want to build
              // credentialsId: the ID of the credentials for your GitLab repo that is being managed by Jenkins
              // url: url to your repo
              git branch: 'master', credentialsId: 'e0c785e8-b34d-48f3-aaf2-c90c132bfe30', url: 'https://gitlab.com/2005-javareact/tyler/test.git'
           }
        }
        stage('Install node modules'){
            steps{
                // install dependencies as described in the package.json
                sh 'npm install'
            }

        }
        stage('Destroy Old Server') {
            steps {
                script {
                    try {
                        // kill any running instances of the app if applicable
                        sh 'kill $(lsof -t -i:$PORT)'
                    } catch (all) {
                        // if it fails that should mean a server wasn't already running
                        echo 'No server was already running'
                    }
                }
            }
        }
        stage('Start New Server!') {
            steps {
                script {
                    // start the application server
                    // the nohup means that we want to log the output to a file instead
                    sh 'nohup npm start &'
                }
            }
        }
    }
}
