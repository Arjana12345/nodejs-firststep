var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/show_form/', function (req, res) {
   res.sendFile(path.join(__dirname,"form.html"));
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(3000, function () {
   console.log("Express App running at http://127.0.0.1:3000/show_form/");
})