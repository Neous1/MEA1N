var express = require ("express");
var router = express.Router();

router
    .route("/json")
    .get(function(req, res){
        console.log("Get the json");
        res
            .status(200)
            .json({"jsonData": true})
    })
    .post(function(req, res){
        console.log("Post the json route");
        res
            .status(200)
            .json({"jsonData": "Post received"})
    })
module.exports=router;

