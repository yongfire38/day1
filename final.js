var http = require("http"); //기본 웹 서버 모듈
var express = require("express"); //웹 서버의 기능을 보완한 모듈, 외부 모듈
var oracledb =  require("oracledb");  //오라클 모듈, 외부 모듈

/* 오라클 데이터베이스 접속 */
var pool = oracledb.createPool({
    user:"scott",
    password:"2187",
    connectString:"localhost/orcl",
    poolMax:50,
    poolMin:2,
    poolIncrement:5,
    poolTimeout:4 
}, function(err, con){
    if(err){
        console.log(err);
    }else{
        console.log(con);
    }
});

var app = express(); //express 생성

var server = http.createServer(app);

/* html, 각종 문서등의 정적 자원을 클라이언트가 요청 시마다 서버에서 코드로 대응한다면 
유지보수성이 떨어진다. 
개선책)정적자원(동영상, 이미지, css, js, html...)들에 대해서까지 코드로 요청을 처리하지 말자. 자원의 위치만 지정해 놓자!
*/

//express 모듈은 미들웨어라 불리는 기능들을 지원하며, 이 미들웨어는 app.use로 설정할 수 있다.
//정적자원의 위치를 등록하는 미들웨어를 써 보자!
//주의) 이 코드가 리눅스, 윈도우, 맥 어디서 실행될지 알 수 없으므로 코드 중립적으로 가려면 경로는 프로그래밍 적으로 구하자
//ex)application.getRealPath();
//Node.js는 자체적으로 몇 개 안되는 전역변수를 지원하는데 그 중 __dirname 전역변수가 현재 어플리케이션이 실행되고 있는 풀 경로를 반환해 준다.

console.log(__dirname);

app.use(express.static(__dirname));

/* 클라이언트의 요청 처리 */

server.listen(8888, function(){
    console.log("웹 서버가 8888 포트에서 가동 중");
})