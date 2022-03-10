var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"), function (err) {
		if(err) {
			res.send("Our website is currently under maintenance, please come back later");
		}
	});
});

app.listen(3000);

console.log("Test 3000");