const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_72e58e4fdbb23d9d0f278b20e82b4420aeefbc00",
        options: {
            'sonar.projectName': 'agile-express-frontend',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'agile-express-frontend',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
            'sonar.login': 'admin',
            'sonar.password': '61e04G31'
        }
    },
    () => process.exit()
)