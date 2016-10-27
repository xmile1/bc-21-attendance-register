var express = require("express");
var firebase = require("firebase");
var app = express();
var xssFilters = require('xss-filters');
var errorCode, errorMessage;
var Promise = require('promise');
var unirest = require('unirest');

exports.index = function(req, res) {
  res.render('index', {
    title: 'attendance-app'
  });
};
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDB-hmXo12LUGhquW7Y1cazXCU6yT8Gil0",
  authDomain: "attendanceregister-64a7b.firebaseapp.com",
  databaseURL: "https://attendanceregister-64a7b.firebaseio.com",
  storageBucket: "attendanceregister-64a7b.appspot.com",
  messagingSenderId: "125943458788"
};
firebase.initializeApp(config);

exports.signup = function(req, res) {
  firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password).catch(function(error) {
    errorCode = error.code;
    errorMessage = error.message;
    i9
  });


};

//var jsonString = JSON.stringify(jsonObject);
// var ref = firebase.database().ref("Subjects/");
// ref.child(quizName).set(jsonObject);
// readline.resume();
// readline.prompt();

//req and res and 
exports.signin = function(reqEmail, reqPassword) {
  firebase.auth().signInWithEmailAndPassword(reqEmail, reqPassword).catch(function(error) {
    errorCode = error.code;
    errorMessage = error.message;
  })

  return errorCode == true ? errorCode : "Success";
};

var setAttendance = new Promise(function(resolve, reject) {
  var user = firebase.auth().currentUser;
  firebase.database().ref('/setttings/currentEvent').once('value').then(function(snapshot) {
    resolve(snapshot.val());
  });
}).then(function(currentEvent) {
  var user = firebase.auth().currentUser;
  var d = new Date();
  var key = user.email.split("@")[0];
  var obj = {};
  obj[key] = d;

  var reference = 'events/' + currentEvent + '/attendees';
  console.log("Started");
  firebase.database().ref(reference).push(obj);
  console.log("I got Here");
});



exports.createnewevent = function(ref, object) {
  firebase.database().ref("events/").push({
    eventTitle: object.eventTitle,
    date: object.eventDate,
    startTime: object.eventStartTime
  });
};

exports.isAdmin = function() {
  var user = firebase.auth().currentUser;
  var email;
  if (user != null) {
    email = user.email;
    if (email == "hiskonxeptz@gmail.com") {
      return true;
    }
  }
};


exports.isLoggedIn = function() {
  var user = firebase.auth().currentUser;
  if (user) {
    return true
  } else {
    return false
  }

};

exports.checkStatus = function(pos, neg, errorMessage) {



  var user = firebase.auth().currentUser;
  if (user) {
    return (pos)
  } else {
    if (errorCode == 'auth/weak-password') {
      return (neg);
    } else {
      return ('Other Errors. Details: ' + errorMessage);
    }

  }


};

exports.signout = function(req, res) {
  firebase.unauth().signout();
};


/**
 * Create a Category
 */
exports.create = function(req, res) {

};

/**
 * Show the current Category
 */
exports.read = function(req, res) {
  // res.json({"test":"fsddfdsdffdstestingg","dds":"sdfsdf"});
};
/**
 * Update a Category
 */
exports.update = function(req, res) {
  var ref = firebase.database().ref('');
  ref.set({});
};

/**
 * Delete an Category
 */
exports.delete = function(req, res) {

};

/**
 * List of Categories
 */
exports.list = function(req, res) {

};