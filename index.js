var express = require('express')
var app = express()

app.get('/', function(req,res){
	res.send('Hello World')
})

//listen on port 
app.listen(3051)

// write friendly message to console
console.log("Server running at http://localhost:3051/");