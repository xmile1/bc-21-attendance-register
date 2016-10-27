/**
 * Module dependencies.
 */

var express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  compress = require('compression'),
  favicon = require('static-favicon'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler'),
  config = require('./config'),
  routes = require('./routes'),
  firebase = require("firebase"),
  viewcontroller = require('./controllers/viewreport'),
  indexcontroller = require('./controllers/index');

var app = express();
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

if (app.get('env') === 'development') {
  app.use(errorHandler());
}


// app.get('/*', function(req, res) {

//   if (indexcontroller.isLoggedIn === false) {
//     res.render('index', {
//       status: "Please, You need to Login"
//     })
//   }

// });

app.post('/signup', function(req, res) {
  // res.send(indexcontroller.signup(req, res));
  res.render('index', {
    message: indexcontroller.signup(req, res)
  });
  //attend
});

app.post('/createevent', function(req, res) {
  console.log("got here");
  var theref = "events";
  var thekey = req.body.eventShortCode;
  var details = {
    eventTitle: req.body.eventTitle,
    startTime: req.body.fullname,
    date: req.body.eventDate,
    attendees: {}
  };

  if (indexcontroller.create(theref, thekey, details) == true) {
    res.render('admin', {
      status: "Event Created!"
    });
  }


});


app.post('/signin', function(req, res) {
  firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
      if (indexcontroller.isAdmin()) {
        res.redirect('admin');
      } else {
        var themsg = indexcontroller.setAttendance()();
        console.log(themsg);
        if (themsg != "") {

          res.render('index', {
            message: themsg
          });
        }

      }
      // User is signed in.
    } else {
      // res.render('index', {
      //   message: signinMsg});
      // No user is signed in.
    }
  });
  var signMsg = indexcontroller.signin(req.body.loginEmail, req.body.loginPassword);

  // res.render('index', {
  //       message: indexcontroller.signin(req, res)});
});


app.get('/signout', function(req, res) {
  res.render('index', {
    status: indexcontroller.signout()
  });
});


// res.render('index');
app.get('/admin/viewreport', function(req, res) {
  res.render(viewcontroller.read(req, res));
  // res.render('index');
});

app.get('/admin', function(req, res) {

  res.render('admin');

  // res.render('index');
});

app.get('/', function(req, res) {
  res.render('layout');
});



//check for errors
app.use(function(req, res) {
  res.status(404).render('404', {
    title: 'Not Found :('
  });
});



app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});