var friends = require("../data/friends.js");

module.exports(function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
        //make sure to figure out the proper format that friends.js content will be exported as
    })
    app.post('/api/friends', function (req, res) {
        var surveyResults = req.body;
        var indexScoreTracker = [];
        for (var i = 0; i < friends.length; i++) {
            var individualScore = 0;
            for (var j = 0; j < friends[i].score; i++) {
                individualScore += Math.abs(parseInt(friends[i].score[j]) - parseInt(req.body.score[j]));
            }
            indexScoreTracker.push(individualScore);
        }
        res.json(friends[findMatch()]);
        friends.push(surveyResults);

        //do stuff here for compatibility logic
    })
    function findMatch(tracker_array) {
        var min = tracker_array[0];
        var minIndex = 0;
        for (var i = 1; i < tracker_array.length; i++) {
            if (tracker_array[i] < max) {
                minIndex = i;
                min = tracker_array[i];
            }
        }
        return minIndex;
    }

})
