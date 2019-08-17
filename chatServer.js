/* 기존의 c, java, c#, python 등 응용프로그램에서나 가능했던 소켓 통신 채팅을 node.js를 이용하면 웹 기반으로 구현 할 수 있다.
이 때 클라이언트 측에 필요한 기술은 WebSocket이며 HTML5부터 지원된다..

웹소켓 기술로 채팅을 구현한다 할지라도 웹 서버를 기반으로 실행되므로 http 모듈이 필요하다.
*/

var http = require("http"); //내장모듈
var express = require("express"); //웹 서버의 기능을 보완한 모듈, 외부 모듈
//웹 소켓 모듈, 웹 소켓을 이용하면 루프문을 실행하지 않아도 클라이언트와 지속적으로 접속을 유지하는 효과를 내 준다.
var app = express();
var socketio = require("socket.io");

var server = http.createServer(app);

/* 정적 자원들에 대해서 별도의 요청 처리를 하지 않기 위해 static 미들웨어를 사용해 본다 */
app.use(express.static(__dirname));

server.listen(7777, function(){
    console.log("웹 서버가 7777포트에서 실행 중...");
});

/* 웹 소켓은 기존의 웹 서버 상에서 실행되므로 이미 웹 서버가 존재해야 한다.. */
var io = socketio.listen(server); //웹 소켓 서버 가동, 기존의 웹 서버를 넣어줘야 한다.
var serverSocket = io.sockets; //접속자 감지용 소켓 생성

//on은 이벤트 핸들러..
//socket은 실제로 대화를 나누기 위한 전화기와 같다..
serverSocket.on("connection", function(socket){
    console.log("접속자 발견!");

    //접속자의 메시지를 받는 이벤트
    //data 이벤트 : 클라이언트가 메시지를 보낼 때 발생
    socket.on("message", function(msg){
        console.log("클라이언트의 말:", msg);
    })
});