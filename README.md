# REST IS GOOD
Shitty typescript + node.js + express web app. This is a set counter for workouts and a rest timer in one. Wow.

## TASKS
- write the HTML and get express to serve it properly somehow.

Building and running: (this probably won't work)
```
npm install stuff
npm run build && node dist/
```

Build and run docker image:
```
docker build -t rest_is_good:latest .
docker run -p 3001:3001 rest_is_good
```

Push and release container to Heroku app: (how the hell does Heroku know which port that I'm hosting the server at?!?!?!?! Normally this is done by exposing a port in the `docker run` command..... hmmmm...... )

Also Heroku CLI is super easy to use wow.
```
heroku login
heroku container:login
heroku container:push web -a rest-is-good
heroku container:release web -a rest-is-good
```