/*
http 모듈이 웹 서버 구축에 필요하기는 하지만 기본적인 기능만을 지원하다 보니 효율성이 떨어짐. 
해결책) 더 보완된 강력한 모듈

express 모듈은 외부 모듈이므로 다운받아야 한다. 이것이 바로 node.js의 장점. 모두 무료이며 공개 프로젝트임.
express 모듈은 http 모듈을 보완하기 때문에 http모듈을 기본으로 한다.

*/
var http = require("http"); //내장모듈
var express = require("express"); //웹 서버의 기능을 보완한 모듈, 외부 모듈
var fs = require("fs"); //내장모듈
var mysql = require("mysql");//외부모듈
var app = express(); //express 생성!

//Node.js로 mysql 접속하기
mysql.createPool({
	host: "localhost",
	user: "root",
	password: ""
});

//클라이언트의 요청이 get방식인 경우 아래 메서드 동작
app.get("/test", function (request, response) {
	fs.readFile("test.html", function (error, data) {
		response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
		//response.end("test 요청으로 express기능을 추가하여 처리함");
		response.end(data);
	});
});

var server = http.createServer(app); //인수에 express로 생성된 app넣으면 서버가 업그레이드 
server.listen(9999, function () {
	console.log("웹 서버가 9999포트에서 가동중...");
});
