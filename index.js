var express = require('express');
var app = express();

var ECT = require('ect');
var ectRenderer = ECT({ watch: false, root: __dirname + '/views', ext : '.ect' });

app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

app.get('/', function (req, res){
    res.render('index', { title: 'NODE SERVER', ultimateAnswer: 42 });
});

app.listen(3000, function() {
	console.log('Listening on port 3000');	
});

