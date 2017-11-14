/** Created by sangjunpark on 2017. 11. 14.. ...*/

function calculateAge(birth){
    var age = 2017 - birth ;
    return age ;
}

var agejohn = calculateAge(1990) ; // 2017-1990
console.log(agejohn);

/*
이름, 년도(입사일)
은퇴 65세 2017
얼마나 남았는지

남았으면 얼마나 남았습니다.
오버됐으면, 이미 은퇴했습니다.

html 브라우저 출력

*/


 //브라우저 출력 : 은퇴의 기준년도는 <2017>년 입니다.

function calculateage(birth) {
   var age = 2017 - birth ;
   return age ;
}

var agejohn = calculateage(1990) ; // 2017 - 1990
//console.log(agejohn) ;

/*
이름, 년도 출생 1980
은퇴 65세
얼마나 남았는지
       남았다면 얼마나 남았습니다
       넘었다면 이미 은퇴했습니다.
html브라우저
*/


function checkretirement(age , workPerioid) {
var remain = workPerioid - age;

        if( workPerioid > 0 ) {
           document.write(retirename+"는 은퇴가 "+between+"년 남았습니다") ;
        } else if( workPerioid == 0 ) {
           document.write(retirename+"은 올해 은퇴합니다")
        }
        else {
            document.write(retirename+"는 이미 은퇴했습니다.") ;
        }

document.write("<br>")
document.write(" 은퇴의 기준년도는 "+ retirementyear +"입니다.") ;

}


// 이름, 생년, 현재년도, 은퇴날짜
/*
document.write("<br>")
yearsretirement('john', 2007, 2067, 60) ;
document.write("<br>")
yearsretirement("jane" ,2000 ,2020 ,40 ) ;
document.write("<br>")
yearsretirement("Rachel" ,2000 ,2041 ,40 ) ;
*/
/*

*/
/* 이름 , 생년, 현재년도, 총 일하는 기간*/
/*

function yearsretirement(name, birth, year, retireage){
    var age = year - birth ;
    var remain = checkretirement(age , period) ;
    return remain;
}
*/
/* 이름 , 생년, 현재년도, 최대 일하는 기간*/
/*

var currentyear = 2017 ;
var age = yearsretirement(2007, currentyear , 20); //이름, 생년 ,현재년도, 정년
document.write("현재는 "+currentyear+"년 입니다<br>");
document.write("은퇴 남은 기간 "+age+"세 입니다.<br>");

document.write("<br>은퇴는 "+remainYear+" 년 남았습니다.");

*/



/*


//더하기 함수
function sum(first,second){
    var s = first + second ;
    return s;
}
//빼기 함수
function minus(first,second){
    var m = first - second ;
    return m ;
}
//곱셈 함수
function mul(first,second){
   return first * second ;
}
//연산자 인식 함수
function operate(n1 , n2 , oper){
    var sum2 ;
    if(oper =="+"){
        sum2 = sum(n1, n2);
    }else if (oper == "-") {
        sum2 = minus(n1, n2) ;
    } else if (oper == "*") {
        sum2 = mul(n1 , n2 ) ;
    }
    return sum2;
}
    var first = 2 ;
    var second = 5 ;
    var operator = "+" ;


var first = 2 ;
var second = 5 ;
var operator= "+" ;
var test1 = sum(first,second) ;
document.write("<br>")
document.write("("+first+"+"+second+")="+sum(2,5));
document.write("<br>")
document.write("("+first+"-"+second+")="+minus(2,5));
document.write("<br>")
document.write("("+first+"*"+second+")="+mul(2,5));

document.write("("+first+operator+second+")="+operate(first,second,operator));*/
/* 이름 , 생년, 현재년도, 총 일하는 기간*/
function checkRetirement(age, workPerioid) {
    var remain = workPerioid - age ;
    return remain ;
}
/* 이름 , 생년, 현재년도, 최대 일하는 기간*/
function yearsretirement(birth, year, period) {
    var age = year - birth ;
    var remain = checkRetirement(age , period) ;
    return remain ;
}
//은퇴 글씨 출력
function displayRetire(remain){
    if(remain == 0 ) {
        document.write("올해가 은퇴합니다.");
    } else if (remain > 0) {
        document.write("은퇴가 "+remain+"년 남았습니다.");
    } else {
        document.write("이미 은퇴했습니다");
    }
}

var currentyear = 2017
var remain = yearsretirement(2007, currentyear, 20);
document.write("현재는 "+currentyear+"년 입니다<br>");
displayRetire(remain);


var name = "john" ;

function third() {
    var c = "Hey" ;
    console.log("third Hey");
}

function second() {
    var b ="Hi!" ;
    third();
    console.log("second Hi");
}

function first() {
    var a = "Hello" ;
    second();
    console.log("first Hello");
}

first();