var friends = require("../data/friends");

module.exports = function (app) {
    // Get
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //Post
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var lowest = 999;
        var match;

        console.log(newFriend);
        for (var i = 0; i < friends.length; i++) {
            var checkDiff = 0;
            // Check score differences
            for (var j = 0; j < friends[i].scores.length; j++) {
                if(parseInt(newFriend.scores[j])!=parseInt(friends[i].scores[j])){
                    checkDiff++;
                }
            }
            console.log("Difference: " + checkDiff+ " for "+friends[i].name)
            // If difference is lower than lowest, store it
            if(checkDiff < lowest){
                lowest=checkDiff;
                match = i;
            }
        }

        res.json(friends[match]);
    });
}