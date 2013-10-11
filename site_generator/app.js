
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
//var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/..' }));
app.use(express.static(path.join(__dirname, '/..')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/home', routes.index);
app.get('/widerrufsbelehrung', routes.index);
app.get('/kba', routes.index);
app.get('/versand', routes.index);
app.get('/lieferung', routes.index);
app.get('/product', routes.index);
app.get('/volkswagen', routes.index);
app.get('/impressum', routes.index);
app.get('/agb', routes.index);
app.get('/aboutme', routes.index);
app.get('/mitarbeiter', routes.index);

app.get('/copy/shop-kopfzeile', routes.index);
app.get('/copy/promotion-boxes', routes.index);

app.get('/product/allgemein', routes.index);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
