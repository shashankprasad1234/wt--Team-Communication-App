# TaskMan
This is **TaskMan**! <br>
TaskMan is a Web Application designed to discuss and work on projects with your team. <br>

## Requirements:
1. Angular 8
2. Ionic (4 or beyond)
3. Python (3.6+)
	1. flask
	2. requests
	3. google
	4. flask-cors

## Running the app:
Within `/flask` run `python3 app.py runserver`.
With the flask server running, in the project root, run the Angular app `ionic serve`.

## Implementation Details:
This project was designed by:
1. Anantharam R U,
2. Shashank Prasad,
3. Gaurang Rao

as a part of our Web Technologies II course.

The application uses several Web Tech. concepts such as:
1. Periodic refresh - Used to refresh the chat and the projects page continuously, checking for updates.
2. Multi-stage download - Used to retrieve older messages in a chatroom.
3. HTTP Requests - To send requests to the Flask server.




