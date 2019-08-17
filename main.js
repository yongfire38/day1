/*-----------------------------------

asp,php,jsp 가 할 수 있었던 그 기능
node.js를 아용해서 서버를 개발해본다
tomcat과 비교해 가며.. 기능을 보완하면서..
--------------------------------------*/

//console.log("Node.js 1일 차 수업입니다.");

//내장 모듈 중 기본 웹 서버 기능을 갖춘 모듈을 선언
var http = require("http");
var server = http.createServer(); //서버 생성
var fs = require("fs"); //파일 시스템 모듈. 파일을 읽고 쓰는 등의 스드림 관련된 모듈

/*-----------------------------------

Node.js가 서버이기 때문에 클라이언트가 html이나 각종 문서를 요청하면 해당 파일을 한 줄씩 읽어 들여 전송해야 한다
개발자가 일일이 한다면 유지 보수성이 떨어짐
서블릿에서 out.print(tag...");
--------------------------------------*/

//클라이언트들의 요청을 받아보자!
//on : 이벤트 핸들러
//request 이벤트 
//익명함수의 인수 중 request는 클라이언트의 요청 정보를 담고 있는 객체, response는 응답 정보를 보유한 객체. 응답 시에는 이 객체를 이용해야 한다.
server.on("request", function(request, response){
	//console.log("클라이언트 접속 발견!!");
	console.log(request.url); //클라이언트가 서버로 요청할 때의 url

	if(request.url == "/test"){
		fs.readFile("./test.html", function(error, data){
		if(error){
			console.log(error);
		}else{
			console.log(data.toString());
			//응답 데이터가 어떤 종류의 데이터인지를 명시하고 서버 코드를 보냄으로서, 클라이언트가 서버의 상태를 알게 하자.
			response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"}); 
			response.end(data.toString()); //클라이언트 측에 응답
			}
		});
	}else if(request.url == "/green"){
		fs.readFile("./green.html", function(error, data){
		if(error){
			console.log(error);
		}else{
			console.log(data.toString());
			//응답 데이터가 어떤 종류의 데이터인지를 명시하고 서버 코드를 보냄으로서, 클라이언트가 서버의 상태를 알게 하자.
			response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"}); 
			response.end(data.toString()); //클라이언트 측에 응답
			}
		});
	}
	//response.end("응답"); //클라이언트 측에 문자열로 응답
});

server.listen(9999, function(){
	console.log("웹 서버가 9999포트에서 가동중...");
}); //포트번호, 익명함수