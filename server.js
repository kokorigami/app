
var config = require('./config.json');
var koa = require('koa');
var app = koa();

app.use(require('koa-static')('static'));
app.listen(config.port);

