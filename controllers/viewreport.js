/**
 * do something with the user model
 * var User = require('../models/user');
 */


exports.index = function (req, res) {
  res.render('viewreport', {
    title: 'attendance-app'
  });
};

var express = require("express");
var firebase = require("firebase");
var app = express();
  // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyDB-hmXo12LUGhquW7Y1cazXCU6yT8Gil0",
//     authDomain: "attendanceregister-64a7b.firebaseapp.com",
//     databaseURL: "https://attendanceregister-64a7b.firebaseio.com",
//     storageBucket: "attendanceregister-64a7b.appspot.com",
//     messagingSenderId: "125943458788"
//   };

// // var playersRef = firebase.database().ref("players");
// // playersRef.push({
// //     John : {
// //         number : 5,
// //         age: 37
// //     },
// //     Amanda : {
// //         number : 55,
// //         age: 23
// //     }
// // });
// // var playersRef = firebase.database().ref('users');
// // playersRef.push({
// //     name: "James",
// //     age: 45
// // });
// var email = "hiskonxeptz@gmail.com";
// var password = "bond-j77";

// // signup
// // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
// //     // Handle Errors here.
// //     var errorCode = error.code;
// //     var errorMessage = error.message;
// //     // [START_EXCLUDE]
// //     if (errorCode == 'auth/weak-password') {
// //         console.log('The password is too weak.');
// //     } else {
// //         console.log(errorMessage);
// //     }
// //     console.log(error);
// //     // [END_EXCLUDE]
// // //  });

// // // var name, email, photoUrl, uid;
// // // // sign in
// // var r = firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
// //   console.log(error.code);
// //   console.log(error.message);
// // })
// // console.log(firebase.auth());
// // function getDetails(user) {
// //     if (user != null) {
// //       name = user.displayName;
// //       email = user.email;
// //       photoUrl = user.photoURL;
// //       uid = user.uid; 
// // }

// // var uid = firebase.auth().currentUser;
// // console.log(uid);


// // postsRef.on('child_changed', function(data) {    
// //          // var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
// // -        var post = data.key[0]
// //         data.val().title;
// // -        post.getElementsByClassName('username')[0].innerText = data.val().author;
// // -        post.getElementsByClassName('text')[0].innerText = data.val().body;
// // +        var postElement = containerElement.getElementsByClassName('post-' + data.key)[0];
// // +        postElement.getElementsByClassName('mdl-card__title-text')[0].innerText = data.val().title;
// // +        postElement.getElementsByClassName('username')[0].innerText = data.val().author;
// // +        postElement.getElementsByClassName('text')[0].innerText = data.val().body;
// // +        postElement.getElementsByClassName('star-count')[0].innerText = data.val().starCount;
// //      data.val().role = "admin";
// // });

// // var user = firebase.auth().currentUser;



//      // The user's ID, unique to the Firebase project. Do NOT use
//       // this value to authenticate with your backend server, if
//    // you have one. Use User.getToken() instead.
// // }
// // var user = firebase.auth().currentUser;
// // console.log(firebase.auth());







// // var ref = new firebase("https://maintenance-tracker-b8085.firebaseio.com/");
// // var authData = ref.getAuth();
// // if (authData) {
// //   console.log("Authenticated user with uid:", authData.uid);
// // }

// firebase.auth().onAuthStateChanged(function(user) {
//  if (user) {
//    console.log("Signed in");
//    console.log(firebase.auth().currentUser);
//  } else {
//    // No user is signed in.
//    console.log('Not signed in');
//  }
// });




/**
 * Create a Category
 */
exports.create = function(req, res) {

};

/**
 * Show the current Category
 */
exports.read = function(req, res) {
	 return res;
// res.json({"test":"fsddfdsdffdstestingg","dds":"sdfsdf"});
};
/**
 * Update a Category
 */
exports.update = function(req, res) {

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