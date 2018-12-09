var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var host=require('./db/host')


var indexRouter = require('./routes/index');
var signinRouter = require('./routes/user');
var postRouter = require('./routes/post');
var newpostRouter = require('./routes/new-post');

var app = express();
// create session
var session = require('express-session')
var MySQLStore = require('express-mysql-session')(session);
var options = {
    host: host.host,
    port: host.port,
    user: host.user,
    password: host.password,
    database: host.database
};
var sessionStore = new MySQLStore(options);

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

// database
/*var createIfNull=require('./db/check_exist_table');
createIfNull.create_if_null();
*/
//body parser
var body=require('body-parser');
app.use(body.json());
app.use(body.urlencoded({extended: false}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/', indexRouter);
app.use('/account', signinRouter);
app.use('/post/', postRouter);
app.use('/new-post', newpostRouter);

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

module.exports = app;
