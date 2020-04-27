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
        var differences = compareScores();
        var matchArray = findDoggos(differences);
        var yourMatches = returnDoggos(matchArray);
        res.json(yourMatches);
        res.end();
    })

    function compareScores () {
        var differences = [];
        var newFriendScores = friends[friends.length-1];
        for (var i = 0; i < dogs.length; i++) {
            var indivDiff = 0;
            for (var e = 0; e < dogs[i].scores.length; e++) {
                var eachDiff = Math.abs(newFriendScores.scores[e]-dogs[i].scores[e]);
                indivDiff += eachDiff;
            }
            differences.push(indivDiff);
        }
        return differences;
    }

    function findDoggos (differences) {
        var matchArray = [];
        var minDiff = Math.min.apply(Math, differences);
        for (var i = 0; i < differences.length; i++) {
            if (differences[i] === minDiff) {
                matchArray.push(i);
            }
        }
        return matchArray;
    }

    function returnDoggos (matchArray) {
        var yourMatches = [];
        for (var i = 0; i < matchArray.length; i++) {
            yourMatches.push(dogs[matchArray[i]]);
        }
        return yourMatches;
    }
}
