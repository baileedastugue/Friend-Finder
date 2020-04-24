var dogs = require("../data/dogs");
var friends = require("../data/friends");

module.exports = function(app) {
// route to the API
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    })

    app.get("/api/dogs", function(req, res) {
        return res.json(dogs);
    })

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        friends.push(newFriend);
        res.json(newFriend);
        compareScores();
        res.end();
    })


    function compareScores () {
        var allScores = [];
        console.log(friends[0].scores[1]);
        // for (var i = 0; i < dogs.length; i++) {
        //     for (var e = 0; e < dogs[i].scores.length; e++) {
        //         console.log(dogs[i].scores[e]);
        //     }
        // }
    }
}