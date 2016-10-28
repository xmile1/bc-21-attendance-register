# XAttend 0.0.1

[![Code Issues](https://www.quantifiedcode.com/api/v1/project/54a4decaa92b4d2483d7a1c3c42f79c0/badge.svg)](https://github.com/xmile1/bc-21-attendance-register/issues)

## Introduction
*  **`XAttend`** is a nodeJS Powered Event Attendance Register.
*  It's features include;
  *  Sign up for new Users using email
  *  Simple button Click to indicate attendance
  *  Admin Page with functionalities including 
     * view attendance report per event
     * view event list and total attendees
     * view graph summary of attendance based on event

## Dependencies

### Back End Dependencies

*  This app's functionality depends on multiple NodeJS packages including;
  * chart.js
  * compression
  * cookieparser
  * errorhandler
  * express
  * jade
  * morgan
  * promise
  * static-favicon
  * xss-filters

## Front End Dependencies
*  **[BootStrap CSS](http://getbootstrap.com/)** - The app's login and admin templates have been styled using this CSS framework
*  **[Glyphicons](https://glyphicons.com/)** - Iconic font and css toolkit.

## Installation and setup
*  Navigate to a directory of choice on `terminal`.
*  Clone this repository on that directory.
  *  Using SSH;

    >`git clone https://github.com/xmile1/bc-21-attendance-register.git`

  *  Using HTTP;

    >`https://github.com/xmile1/bc-21-attendance-register`

*  Navigate to the repo's folder on your computer
  *  `cd bc-21-attendance-register/`
*  Install the app's backend dependencies.
  *  `npm install`
* Run the app
  *  `node app.js`
  *  Running the command above will produce output that's similar to the sample below.

  ```
   Express server listening on port 3000
  ```
  * visit http://localhost:3000
  
## Tests
* no tests were perfomed due to time limitation
