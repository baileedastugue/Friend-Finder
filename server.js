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
app.use(express.static(__dirname + '/app/public'));

var dogs = [
    {
        name: "Lily",
        picture: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        scores: [2, 4, 4, 1, 1]
    },
    {
        name: "Indie",
        picture: "https://images.unsplash.com/photo-1567529684892-09290a1b2d05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        scores: [3, 3, 5, 1, 4]
    },
    {
        name: "Coco",
        picture: "https://images.unsplash.com/photo-1546447147-3fc2b8181a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        scores: [2, 2, 1, 5, 2]
    },
    {
        name: "Clark",
        picture: "https://images.unsplash.com/photo-1532202802379-df93d543bac3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        scores: [4, 5, 4, 4, 5]
    },
    {
        name: "Diego",
        picture: "https://images.unsplash.com/photo-1534521304921-99d19068d8aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        scores: [1, 4, 3, 2, 2]
    },
    {
        name: "Bear",
        picture: "https://images.unsplash.com/photo-1513904178077-6c5730ddd446?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        scores: [4, 4, 5, 5, 4]
    },
    {
        name: "Daphney",
        picture: "https://images.unsplash.com/photo-1472698938026-79bed881e5b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        scores: [2, 1, 2, 3, 2]
    },
    {
        name: "Jasper",
        picture: "https://images.unsplash.com/photo-1551097295-4c28e380cdf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        scores: [5, 5, 4, 5, 4]
    },
    {
        name: "Humphrey",
        picture: "https://images.unsplash.com/photo-1542765826-d17aa264390d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        scores: [3, 4, 2, 2, 3]
    },
    {
        name: "Molly",
        picture: "https://images.unsplash.com/photo-1535249257686-29c7471d48e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
        scores: [2, 2, 3, 4, 3]
    },
    {
        name: "Rupert",
        picture: "https://images.unsplash.com/photo-1521229424090-c4e9ff91d66b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
        scores: [5, 5, 4, 1, 5]
    },
    {
        name: "Chester",
        picture: "https://images.unsplash.com/photo-1560075473-14470cb1fe1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
        scores: [1, 4, 2, 1, 2]
    },
    {
        name: "Gumpy",
        picture: "https://images.unsplash.com/photo-1559492768-0183fa88e272?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
        scores: [3, 2, 5, 4, 1]
    }
    // https://images.unsplash.com/photo-1550001632-fcfab51361ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60
    // https://images.unsplash.com/photo-1563890011739-da2ef4a3cb13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60
    // https://images.unsplash.com/photo-1575043767705-046bbf82d12b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60
];

var friends = [];


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

app.get("/api/dogs", function(req, res) {
    return res.json(dogs);
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