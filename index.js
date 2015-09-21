var express = require('express')
var app = express()
var port = (process.env.port || '3051')

app.get('/', function(req,res){
	res.send('Hello World')
})

//listen on port 
app.listen(port)

// write friendly message to console
console.log("Server running at http://localhost:"+port);