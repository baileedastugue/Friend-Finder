// dependencies
var express = require("express");
var path = require("path");

// setting up the Express App 
// ===========================

// creates an instance of Express
var app = express();
var PORT = 3000;

// sets up the Express add to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

var friends = [
    {
        name: "Bailee",
        picture: "picture"
    }
];


// routes
// ===========================

// route to the first AJAX page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
})

// route to the survey
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
})

// route to the API
app.get("/api/friends", function(req, res) {
    return res.json(friends);
})

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})