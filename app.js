var express = require("express");
var app = express();
app.listen(3000, () => {
   console.log("Server listening on 3000");
})

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://infodba:<infodba>@cluster0.stvnuya.mongodb.net/?retryWrites=true&w=majority", () => {
   console.log("Connected to Mongo DB Successfully!!");
})

const bodyParser = require("body-parser");
app.use( bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const router = express.Router();
const student = require("./model/Student.js"); 
const bcrypt = require("bcrypt");
router.post("/student", (request, response) => {
      const student = new Student({
         firstName : request.body.firstName,
         lastName : request.body.lastName,
         rollNumber : request.body.rollNumber,
         password : request.body.password,
         dob : request.body.dob,
         class:request.body.class
      });
bcrypt.hash(student.password, 10, function (err, hash){
if (err) { 
    return next(err);
}
student.password = hash;
student.save().then(data => {
    console.log("Successfully created a new student");
}).catch(error => {
     // you can send an error code here
    })
  })
});
module.exports = router;

// router.get("/",function(req,res){
//    console.log("Opening Html Page");
//    res.sendFile("./views/signup.html");
//    });
let http = require('http');
let fs = require('fs');
let port = 8080;
const server = http.createServer((request, response) => {
      response.writeHead(200, {
          'Content-Type': 'text/html'
      });
      fs.readFile('./views/signin.html', null, function (error, data) {
          if (error) {
              response.writeHead(404);
              respone.write('Whoops! File not found!');
          } else {
              response.write(data);
          }
          response.end();
      });
  });
  server.listen(port, () => {
   console.log(`Server is listening on port number: ${port}`);

});