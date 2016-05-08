var cluster = require('cluster');

if (cluster.isMaster) {
    var numWorkers = require('os').cpus().length;

    console.log('Master cluster setting up ' + numWorkers + ' workers...');

    for(var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
    });
} else {

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

}