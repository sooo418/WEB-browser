/**
 * function test
 */

const log = console.log;

function f1(){
	alert("hello javascript");
}

const f2 = () => alert("hello javascript f2");

function sum(a,b,c){
	if(!c) c=0;
	return a+b+c;
}

function sumAll(){
	var sum =0;
	for(var i=0;i<arguments.length;i++){
		sum += arguments[i]
	}
	return sum;
}

//두수를 입력받아 작은 수 리턴
function small(a,b){
	if(a>b) return b
	else return a
}

const min = (a,b) => a>b? b : a;


function callback(){
	log('callback')
}

function callTenTimes(fn){
	for(let i=0;i<3;i++){
		try{
		    fn();
		}catch (e) {
            log('함수를 넘겨주세요..')
		}
	}  
}

//callTenTimes(callback);
//callTenTimes(function(){alert('hello')});
//let f3;
//callTenTimes(f3 = function(){alert('hello')});

//callTenTimes();


//var intervalID = setInterval( callback,1000);
	//1초마다 callback함수 실행
//clearInterval(intervalID)
	//setInterval 기능을 가진 intervalID함수를 중지한다.

/*
var id2 = setInterval(function (){log(new Date())} ,1000);
setTimeout(function (){  
	clearInterval(id2);
	location.href="http://www.naver.com";
	
} ,5000);
*/
	//5초 후에 id2함수를 중지하고 "http://www.naver.com"로 이동하는 함수


var f4 = function a1(){
	         var data=0;
	         function i1(){
	        	 return ++data;
	         }
	         return i1;
         };
         //변수안에 함수를 넣고 그 함수안에 함수를 넣을 수 있다.
         
f4()(); //li실행


var f5 = function a1(){
             var data=0;
             function i1(){
            	 return ++data;
             }
             return i1;
		 }();

f5(); //li실행



















