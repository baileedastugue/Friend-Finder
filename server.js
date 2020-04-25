// dependencies
var express = require("express");
var path = require("path");

// creates an instance of Express
var app = express();
var PORT = process.env.PORT || 3010;

// sets up the Express add to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("./app/public"));

// .env EXAMPLE ==============
require("dotenv").config();
var apikey = process.env.apikey;
console.log(apikey);
// ===============================

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})