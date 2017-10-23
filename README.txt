The Chat Application is designed using AngularJS 1.6.4. It has following files:
1) index.html - gets data from the controller and displays data on UI. ng-app is initalized in this file.
2) script.js- it is the main controller file of this Angular application. It gets data from DataService which is an Angular service file. It also performs operations like displaying the date when the activity was posted to application and also evaluates and displays if the activity is a comment,reply or a post.
3) service.js- it uses http get command to get JSON data from JSON file hosted on server. It uses 'promise' to get data which returns the data or error depending on the response of request.
4) style.css- used to style the application.

Commands for hosting the JSON file on server to create mock API:
1)$ npm install -g json-server
2)$ json-server --watch activity.json
3)The JSON file is now hosted on http://localhost:3000/recentActivities

