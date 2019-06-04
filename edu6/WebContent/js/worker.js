
var i = 0;

function count(){
	i = i + 1;
	postMessage(i);//서버 단에 i를 계속 출력
	setTimeout("count()" ,1000);
	//1초후에 count()함수를 실행(재귀호출)
}

count();