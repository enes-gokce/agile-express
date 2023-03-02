# agile-express

<h3> Description </h3>

Agile Express is a JIRA-like application where users can keep track of the project and the tasks created for the project. In the application, there are 4 different roles as project manager, team leader, developer and admin.

Project managers can create projects and create tasks within the project. They can create teams within the project and add members to the team. They can create sprints and move the tasks in the backlog to the sprint. They can edit and delete the project, tasks, team, and sprint.

Team leaders can make adjustments to tasks within the project. They can add tasks from backlog to sprint.

Developers can add time spent on tasks that are added to the sprint and assigned to them. They can also change the status of the task.

Admin can edit and delete all projects, tasks, sprints and teams, users.

<h3> Tools and Implementation Choices </h3>

In this application project, sprint, task, team, and users relate to each other. For example, we associate a task with the user, sprint and project. Therefore, I thought it would be a better solution to use a relational database as a database. The project has a relational database in the backend which is SQL based. Since I have experience from my previous projects, I used MySQL.

I used Java and Spring Boot framework for the back-end of the application. Spring Boot is an open source Java-based framework used to create micro services. Developers can easily and efficiently create microservices and controllers, and establish a connection between the back-end and the database. It also offers solutions at the point of ensuring the security of the application. These are the main reasons why I chose Spring Boot.

I used embedded LDAP for user authentication. I just stored username, name, surname and password in the embedded LDAP server. I stored users' extra details such as email, role and team in the database.

I had to authorize the requests on the back-end in order not to get a security error in the requests I sent from the front-end to the back-end. In order to provide this authorization, I had to implement the token structure in the back-end. I used a JWT token for this. Back-end returned the user's jwt token when the user logged in to the system. I have stored this token in the browser and added this token to every request sent from the front-end to the back-end. In this way, I did not get a security error.

I have not dealt with front-end web development other than html and css before, and therefore I was not familiar with any front-end framework or library. I did research on front-end frameworks and libraries. All of them had good and bad sides. Since I am not familiar with any of them, I decided to use React.JS, which is currently the most used library, on the front-end. On the front-end side, I also used extra libraries for different purposes along with React.JS. I used the Axios library to send a request to the back-end and transfer the response to the front-end. I used React Router to provide routing between components. I used React Data Table to create tables. I used HTML and CSS to create and design the web page. I also benefited from the Bootstrap library while designing some components.
