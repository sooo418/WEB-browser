//
var name = "hong";
let num = 90;

let flag = true < 10;
let now = new Date();

const log = console.log;
const log2 = (i)=>console.log(i);

function f1(){
    let name = 'f1-name';
    console.log(name);
    alert(name);
    
}

const f2 = function(a){
   if(a == 'yes'){
       alert(a);
   }
}

var array = ['lee','ko','park',44,46,new Date(),'jeong']

log('--- array ---')
for(let item  in array){
   log(item); 
}
log('--- array ---')
for(let item  of array){
   log(item); 
}
log('--- array forEach ---')
array.forEach(i=>log(i));

log("--------------------------")
let aa = 'aa';
let bb = 'bb';
{
    let aa ='{aa}'
    log(aa);
    log(bb);
}









