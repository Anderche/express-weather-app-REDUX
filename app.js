var express = require('express');

var app = express();

// ROUTES
// Home
app.get('/', function(req, res) {
	res.send("This is a server response on the homepage");
});

app.listen(5000, function() {
	console.log("Listening on localhost:5000");
});

