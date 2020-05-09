# REST IS GOOD
Shitty typescript + node.js + express web app. This is a set counter for workouts and a rest timer in one. Wow.

https://rest-is-good.herokuapp.com/

## TODO
- style
- feedback of actions

## Building and running
```
npm install stuff
npm run build && node dist/
```

## Build and run docker image
```
docker build -t rest_is_good:latest .
docker run -p 3001:3001 rest_is_good
```

## Push and release container to Heroku app
```
heroku login
heroku container:login
heroku container:push web -a rest-is-good
heroku container:release web -a rest-is-good
```