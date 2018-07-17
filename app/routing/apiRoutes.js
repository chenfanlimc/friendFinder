var friends = require("../data/friends.js");

module.exports(function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
        //make sure to figure out the proper format that friends.js content will be exported as
    })
    app.post('/api/friends', function (req, res) {
        var surveyResults = req.body;
        //do stuff here for compatibility logic
    })
})
