var path = require("path");

module.exports = function(app) {
    // Get home
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })

    // Get survey
    app.get("/survey",function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })
};