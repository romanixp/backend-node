var express = require('express');
var server = express();

var messages = [];
var responses = [];

server.get('/', function (req , res) {
	setTimeout(function(){
		debugger;
		res.send('hello world');
	},2000);
});
server.get('/supervisor', function (req, res){
	res.send('Supervisor es Genial!! :P');
});

server.get('/messages',function (req,res) {
	//res.send(messages+'<script>setTimeout(function(){window.location.reload()},1000)</script>');
	responses.push(res);	
});

server.get('/messages/:message', function (req, res) {
	messages.push(req.params.message);
	responses.forEach(function(res){
		res.send(messages+'<script>window.location.reload()</script>');	
	});
	
	res.send('Your message is : '+ req.params.message);	
});

server.listen(3000);