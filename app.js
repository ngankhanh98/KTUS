var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs=require('fs');
var body = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var host=require('./config/host');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var options = {
    host: host.host,
    port: host.port,
    user: host.user,
    password: host.password,
    database: host.database
};
//router
var router = require('./routes/router');
//session store
var sessionStore = new MySQLStore(options);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bin')));
// body parser
app.use(body.json());
app.use(body.urlencoded({extended:false}));
//session
app.use(session({
  key: 'session_cookie_name',
  secret: 'session_cookie_secret',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  endConnectionOnClose: true,
}));

//router
app.use('/', router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// Create folder for uploading files.
var filesDir = path.join(path.dirname(require.main.filename), "images");

if (!fs.existsSync(filesDir)){
    fs.mkdirSync(filesDir);

}

module.exports = app;
