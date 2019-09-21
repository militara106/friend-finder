// Express Config
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Connection Test
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected: " + connection.threadId);
})

// Router


// Servet Listener
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});