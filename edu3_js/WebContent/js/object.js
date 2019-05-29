/**
 * 자바스크립트 객체
 */

const log = console.log;

let array = ['가','하','다','바']
array[4]='~~~'
array.length
array[0]
array.pop()
array.push('ppp')


//자바스크립트 객체 => 싱글톤
var student ={
	name:"홍길동",
	ko:99,
	eng:100,
	sum:function(){
		return this.ko+this.eng;
	},
	avg:function(){
		return this.sum()/2;
	}
}

student.name
student["name"]
student.address='서울'
delete student.address
/*
for(let i in student){
	log(i)
}

for(let i in student){
	log(i,student[i]);
}

for(let i in student){
	log(`${i},${student[i]}`); // 숫자 1 옆의 ` 주의 
}
*/
// 숫자 1 옆의 ` 주의 

var product = [
	{name:'바나나',price:700},
	{name:'체리',price:9000},
	{name:'사과',price:1200},
	{name:'배',price:1900}
]

product[0].name
product[0].price
//product[3].print()

function print(data){
   	 log(data.name," ",data.price)
}

print(product[2])
print(product[1])


//자바스크립트 객체 => 생성자 함수를 통한 객체 생성 
function Student(name,ko,eng){
	this.name=name,
	this.ko=ko,
	this.eng=eng
}

Student.prototype.sum=function(){
	return this.ko+this.eng;
}

Student.prototype.avg=function(){
	return this.sum()/2;
}


var s1 = new Student("홍길동",99,55);
var s2 = new Student("김길동",89,89);


var students = [
	new Student("홍길동",99,95),
	new Student("김길동",89,45),
	new Student("최길동",19,65),
	new Student("고길동",59,55),
	new Student("박길동",91,55),
]

log('평균 list')
for(let data of students){
	log(data.avg())
}

s2.toString = function(){
	return this.name+" : "+this.avg();
}







