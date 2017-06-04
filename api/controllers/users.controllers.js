var mongoose = require("mongoose");
var User = mongoose.model("User");
var bcrypt = require("bcrypt-nodejs");
var jwt = require("jsonwebtoken");


//
module.exports.register = function(req,res) {
    console.log("registered user")

    var username = req.body.username;
    var name = req.body.name || null;
    var password = req.body.password;

    User.create({
        username: username,
        name: name,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    }, function(err, user){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }else{
            console.log("user created", user);
            res.status(201).json(user);
        }
    })
};

module.exports.login = function(req, res){
    console.log("logging in user");
    var username = req.body.username;
    var password = req.body.password;
    console.log(username)
    console.log(req.body)

    User.findOne({
        username: username
    }).exec(function(err,user){
        if(err){
            console.log(err)
            res.status(400).json(err);
        }
        else{
            console.log("user found", user)
            res.status(200).json(user)
        }
        //  else{
        //     // if(bcrypt.compareSync(password, user.password)){
        //     if(bcrypt.compareSync(user.password)){
        //         console.log("User found", user);
        //         // var token = jwt.sign({ username: user.username}, "s3cr3t",{ expiresIn: 3600} );
        //         // res.status(200).json({success: true, token: token});
        //         res.status(200).json(user);
            // }
            // else{
            //     res.status(401).json("Unauthorized");
            // }
            

        // }
    });
};


// //If user exists, they get to login to the website
// module.exports.login = function(req, res) {
//  console.log("Logging in user...");
//  //Accessing the requests bodies
//  var username = req.body.username;
//  var password = req.body.password;
//  console.log("Username: " + username);
//  console.log("Password: " + password);
//  console.log(req.body);

//  User.findOne({
//  username : username })
//  .exec(function(err, user) {
//  var hash = bcrypt.hashSync(password) //convert the req.body.password to hash values
//  console.log(password)
//  if(err) {
//      //Login unsuccessfully
//      console.log(err);
//      res.status(400).json(err);
//  } else {
//      //Login successfully
//      if(bcrypt.compareSync(password, hash)) {
//      console.log("Login successfully", user);
//      res.status(200).json(user);
//  } else {
//      console.log(user.password + " USER.PASSWORD");
//      res.status(404).json("Unauthorized");
//    }
// }
//  });
// };