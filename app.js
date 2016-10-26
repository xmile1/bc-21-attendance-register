/**
 * Module dependencies.
 */

var express        = require('express'),
    path           = require('path'),
    mongoose       = require('mongoose'),
    logger         = require('morgan'),
    bodyParser     = require('body-parser'),
    compress       = require('compression'),
    favicon        = require('static-favicon'),
    methodOverride = require('method-override'),
    errorHandler   = require('errorhandler'),
    config         = require('./config'),
    routes         = require('./routes'),
    firebase       = require("firebase");


// mongoose.connect(config.database.url);
// mongoose.connection.on('error', function () {
//   console.log('mongodb connection error');
// });

var app = express();

viewcontroller = require('./controllers/viewreport');
indexcontroller = require('./controllers/index');
/**
 * Express configuration.
 */

app.set('port', config.server.port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app
  .use(compress())
  .use(favicon())
  .use(logger('dev'))
  .use(bodyParser())
  .use(methodOverride())
  .use(express.static(path.join(__dirname, 'public')))
  .use(routes.indexRouter);


//Simple Middleware Authentication
app.use(function(req, res, next) {
  
  next();
});




if (app.get('env') === 'development') {
  app.use(errorHandler());
}

app.post('/admin/createnewevent', function(req, res){
  var eventDetails = {'eventTitle':req.body.eventTitle, 'eventDate':req.body.eventDate,'eventStartTime':req.body.eventStartTime };
  indexcontroller.createnewevent(eventDetails);
  res.render(viewcontroller.read(req, res));
    // res.render('index');
});


app.post('/signin', function(req, res){
  
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    if (indexcontroller.isAdmin()){
      res.render('admin');
    }
    else{
    indexcontroller.setAttendance();  
    }
    // User is signed in.
  } else {
      // res.render('index', {
      //   message: signinMsg});
    // No user is signed in.
  }
});
  var signinMsg = indexcontroller.signin(req.body.loginEmail, req.body.loginPassword);    

  // res.render('index', {
  //       message: indexcontroller.signin(req, res)});
});

    // res.render('index');
app.get('/admin/viewreport', function(req, res){
   res.render(viewcontroller.read(req, res));
    // res.render('index');
});

app.get('/admin', function(req, res){
   res.render('admin');
    // res.render('index');
});

app.get('/', function(req, res){
    res.render('layout');
});


app.post('/signup', function(req, res){
      // res.send(indexcontroller.signup(req, res));
      res.render('index', {
        message: indexcontroller.signup(req, res) + " " + indexcontroller.signin(req.body.email, req.body.password)});
});

//check for errors
app.use(function (req, res) {
    res.status(404).render('404', {title: 'Not Found :('});
  });


app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});