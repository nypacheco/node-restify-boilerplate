var restify = require('restify');
var Routes = require('./app/routes/index');
var config = require('./config/config');

var server = restify.createServer({
    name: config.app.name
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get( '/hello/:name', Routes.example.hello);

server.get( '/\/?.*!/', function (req, res, next) {
    res.send('Hello World');
    next();
});

server.listen(config.app.port, function() {
    var port = config.app.port || 8080;
    console.log('Listening on %s:%s', config.app.address, port);
});