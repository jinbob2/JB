/** Created by sangjunpark on 2017. 11. 14.. ...*/

function first(par) {
    console.log('test');
}


var first = function (par) {
    console.log('test');
}


var names = [ 'John' , 'Jane' , 'Mark' ] ;
var numbers = [0,1 , 2 ,3 ,4,5,6,7,8,9,10] ;
var testArr = [ 1 , 'John' , true , names] ;

document.write(names);
console.log(names);
document.write("<br>");
document.write(testArr);
console.log(testArr);

document.write("<br>");
document.write(names[1]);
names.push("Log");
document.write("<br>");
document.write(names) ;
document.write("<br>");
names.pop();
var popStr = names.pop();
console.log(popStr);
names.push("Log")
console.log(names[3]);
names.push("Log2")

//names.length-1 마지막것만 가져옴
console.log(names[names.length-1]);
console.log(names[-1]);

console.log(names.indexOf('Jane'));
console.log(names.indexOf('Log4'));


//초기값 ; 비교 참/거짓 ; 액션
console.log("Length="+names.length) ;
for(var i=0 ; i < names.length ; i++ ){
    console.log(names[i]);
}

//도전
//numbers 배열을 3번째에서 끝까지 console 출력하시오.

console.log(numbers);
for(var i=2 ; i < numbers.length ; i++){
    console.log(numbers[i]);
}

//도전
//numbers 배열을 3번째에서 7번째까지 console 출력하시오.

for(var i=2 ; i < 7 ; i++ ){
    console.log(numbers[i]);
}

console.log(names[1]);
//도전
//numbers 배열을 0번째에서 2번째까지 또는 6번째에서 끝까지 console 출력하시오.

for(var i=0 ; i < numbers.length ; i++){
   if( i < 3 || i > 5 ){
   //값이 17이면 "17입니다."를 console 출력
   if( i == 7 ) {
            console.log( numbers[i]+"입니다.");
            //break;
        } else{
        console.log(numbers[i])
        }
    } // "------------- 15 ------------" console 출력
    else {
            console.log("-----------"+numbers[i]+"-----------");
            }
}

