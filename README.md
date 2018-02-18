# Tweetr

Tweeter is a simple, single-page Twitter clone. Built to practice HTML5, CSS, Sass, Javascript, jQuery and AJAX front-end skills, and Node, Express, MongoDB, and Heroku back-end skills.

## Screenshots

!["Copose a Tweet"](https://github.com/mstop4/tweetr/blob/master/doc/birbs.png)
!["Tweet List"](https://github.com/mstop4/tweetr/blob/master/doc/tweets.png)
!["Tweet is too long!](https://github.com/mstop4/tweetr/blob/master/doc/too-long.png)

## Demo

Go to **https://mstop4-tweetr.herokuapp.com/** in your favourite browser.

## How to Use in a Few Easy Steps

1. Clone this repository.
2. Install dependencies using the `npm install` command.
3. Create a .env file in the root directory of the project and add the following lines:
```
MONGODB_URI=mongodb://127.0.0.1:27017/tweets
PORT=8080
```
4. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
5. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- MongoDB
- body-parser
- chance
- dotenv
- md5
