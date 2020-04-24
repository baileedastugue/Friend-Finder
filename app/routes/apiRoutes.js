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
        var newFriendScores = friends[friends.length-1];
        var differences = [];
        for (var i = 0; i < dogs.length; i++) {
            var indivDiff = 0;
            for (var e = 0; e < dogs[i].scores.length; e++) {
                var eachDiff = Math.abs(newFriendScores.scores[e]-dogs[i].scores[e]);
                indivDiff += eachDiff;
            }
            differences.push(indivDiff);
        }
        console.log(differences);
    }
}