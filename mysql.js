var http = require("http"); //내장모듈
var express = require("express"); //웹 서버의 기능을 보완한 모듈, 외부 모듈
var mysql = require("mysql");//외부모듈

//JavaScript Object Notation : 자바스크립트 객체 표기법
//mxl을 대체하는 객체표기법
//접속 메서드
var con = mysql.createConnection({
    //객체라 함은 = 속성+메서드이지만 json은 로직을 작성하기 위함이 아닌 단지 데이터 전달만을 목적으로 함으로 
    //메서드를 넣지 않는다... dto,vo
    host: "localhost",
	user: "root",
    password: "",
    database:"node"
});

var sql = "select * from test";
con.query(sql, function(err, result, fields){
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
});


