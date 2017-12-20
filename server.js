// ref links
// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
// https://stormpath.com/blog/how-to-write-middleware-for-express-apps
const express = require('express');
const bodyParser = require('body-parser');

// npm install express body-parser --save

// express is a [framework,connection middleware] for node and it helps you manage routes,handling requests and views

//body-parser creates middleware for the request coming from server ,
//  it contains all data coming from server within the reqest.body object

const http = require('http');  //http module for handling http requests
const path = require('path');  //
const app = express();  //to call the function express



const api= require('./src/server/routes/api');  // routing your app in api.js

const port = 4200;   //setting port number

  app.use(bodyParser.json());  //telling the system that you are using json, it parses only json

  app.use(bodyParser.urlencoded({extended:true}));

            // configure app to use bodyParser(),
            // this will let us get the data from a POST

            // The extended option allows to choose between parsing the URL-encoded data with the
            // querystring library (when false) or the qs library (when true). The "extended" syntax allows for
            // rich objects and arrays to be encoded into the URL-encoded format,
            // allowing for a JSON-like experience with URL-encoded. For more information, please see the qs library.

            // If extended is false, you can not post "nested object"
            //
            //    person[name] = 'cw'
            //
            //       eg:  Nested Object = { person: { name: cw } }
            //       If extended is true, you can do whatever way that you like.

  app.use(express.static(path.join(__dirname,'dist')));  //to get dist folder, it need after ng build

  app.use('/',api);

  app.get('*',(req,res) => {
        res.sendFile(path.join(__dirname,'dist/index.html'));
  });

  app.listen(port,function(){
    console.log("server running on port : " + port);
  });
