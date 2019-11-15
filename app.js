var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
    res.render("index");
});

app.use(function (req, res, next) {
	res.status(404);
	res.render("error/404");
});

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function (d, i) {
	console.log('Listening on port ' + app.get('port'));
});
