Run npm update if not working.

Techniques we can use:
	-multistage download for getting all the projects and then all the tasks of each individual project
	-periodic refresh for chat


app(overall):
	need to implement:
		-proper navigation and routing
		-settings page



login page:
	login and newuser implemented(not from new user page)
	temp home button goes to menu page
	need to implement:
		-reset password /resetpassword
		-collect userdetails /newuser
		-pass details to server
menu page: /menu
	swipe from left to visit pages
	need to implement:
		-correct routing
		-can only visit one page before navigation fails

home page: /projectlist
	need to implement:
		-backend fetching data and shit
		-refresh ^

project and tasks page: /tasklist
	need to implement:
		-backend fetching data
		-toggle for status
		- add new task
		-edit tasks

Chat page: /chat
	need to implement:
		-basically everything

Add new Project: /home
	need to implement:
	-backend
	-task display