
var express = require ("express");
var app = express();

app.set("port", 3000)


// app.listen(app.get("port"), function(){
//  console.log("magic happens on port " + app.get("port"));
// });
var server = app.listen(app.get("port"), function(){
    var port = server.address().port;
 console.log("magic happens on port " + port);
});
