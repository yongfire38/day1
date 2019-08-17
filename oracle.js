var http = require("http"); //기본 웹 서버 모듈
var express = require("express"); //웹 서버의 기능을 보완한 모듈, 외부 모듈
var oracledb =  require("oracledb");  //오라클 모듈, 외부 모듈

oracledb.getConnection({
    user:"scott",
    password:"2187",
    connectString:"localhost/orcl"
}, function(err, con){
    if(err){
        console.log(err);
    }else{
        console.log(con);
        console.log("접속 후 쿼리 실행 준비!");

        var query = "SELECT * FROM INFOREPLY";

        //쿼리 실행
        con.execute(query, function(err, result){
            if(err){
                console.error(err);
            }

            console.log(result.rows)
        });
    }
});
