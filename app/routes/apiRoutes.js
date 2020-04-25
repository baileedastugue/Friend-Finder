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
        compareScores();
        res.json(yourMatches);
        res.end();
    })

    var differences = [];
    var matchArray = [];
    var yourMatches = [];


    function compareScores () {
        differences = [];
        matchArray = [];
        var newFriendScores = friends[friends.length-1];
        for (var i = 0; i < dogs.length; i++) {
            var indivDiff = 0;
            for (var e = 0; e < dogs[i].scores.length; e++) {
                var eachDiff = Math.abs(newFriendScores.scores[e]-dogs[i].scores[e]);
                indivDiff += eachDiff;
            }
            differences.push(indivDiff);
        }
        
        findDoggos();
    }

    function findDoggos () {
        var minDiff = Math.min.apply(Math, differences);
        for (var i = 0; i < differences.length; i++) {
            if (differences[i] === minDiff) {
                matchArray.push(i);
            }
        }
        returnDoggos();
    }

    function returnDoggos () {
        for (var i = 0; i < matchArray.length; i++) {
            yourMatches.push(dogs[matchArray[i]]);
        }
        console.log(yourMatches);
    }
}
