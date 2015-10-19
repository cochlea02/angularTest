var express = require('express');
var http = require('http');
var app = express();
app.get('/*',function(req,res){
	res.send(req.originalUrl);
});
app.listen(1337,"127.0.0.1");
console.log("服务已启动在本地1337端口");