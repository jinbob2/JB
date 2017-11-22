var John = {
    name : 'John',
    birthYear : 1990,
    job : 'student'
}

John.name = 'Jane';

var Jane = {
    name : 'Jane',
    birthYear : 2000,
    job : 'teacher'
}

var Person = function (name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear ;
    this.job = job ;
}

var Mark = new Person("Mark", 2010, 'doctor');

//var arr = [John , Jane , Mark ] ;
var arr = [] ;
arr.push(John);
arr.push(Jane);
arr.push(Mark);

arr[2].name ;
/*

for(var i=0 ; i=arr.length ; i++){
    console.log(arr);
    break ;
}
*/

//console.log(arr[2]. name);

/*
var text = " ";

text +="<table border='1'>" ;
text +="    <tr>"  ;
text +="    <th>#</th>" ;
text +="    <td>이름</td>" ;
text +="    <td>생년</td>" ;
text +="    <td>직업</td>" ;
text +="    </tr>" ;


for(var i = 0; i < arr.length; i++ ){

    text +="    <tr>" ;
    text +="    <td>"+(i+1)+"</td>" ;
    text +="    <td>"+arr[i].name+"</td>" ;
    text +="    <td>"+arr[i].birthYear+"</td>" ;
    text +="    <td>"+arr[i].job+"</td>" ;
    text +="    </tr>" ;

}

text +="</table>" ;

    document.write(text);
*/

/*
5개
순위 | 이름 | 생년 | 직업 | 사는 곳 | 우편번호 | 오늘 날짜 |

5     park  2000   doctor   서울      101    2017-11-22(오늘날짜) Date
4     Marry 1990   designer 부산      102     오늘날짜
3     Peter 2010   teacher  수원      103     오늘날짜
2     Jane  1995   student  전주      104     오늘날짜
1     Bill  2011   programmer 경주    105     오늘날짜
*/

    var Person1 = function (name, birthYear ,job, address , postcode , date, hour) {
    this.name = name;
    this.birthYear = birthYear ;
    this.job = job ;
    this.address = address ;
    this.postcode = postcode ;
    this.date = date ;
    this.hour = hour;
}
//var registerArr = [];
//registerArr.push( new Register("park","doctor","서울","101","2017-11-22","14-20") ) ;

var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();

var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getMilliseconds();

var arr1 = [] ;

var now = new Date();
//var park = new Person1("park",'doctor',"서울","101",year+"년"+(month+1)+"월"+date+"일",hour+":"+minute+":"+second) ;
var park = new Person1("park",'2000','doctor',"서울","101",now) ;

var now1 = new Date();
//var Marry = new Person1("Marry",'designer',"부산","102",year+"년"+(month+1)+"월"+date+"일",hour+":"+minute+":"+second) ;
var Marry = new Person1("Marry",'1990','designer',"부산","102",now1) ;

var now2 = new Date();
//var peter = new Person1("peter",'teacher',"수원","103",year+"년"+(month+1)+"월"+date+"일",hour+":"+minute+":"+second) ;
var peter = new Person1("peter",'2010','teacher',"수원","103",now2) ;

var now3 = new Date();
//var Jane = new Person1("Jane",'student',"전주","104",year+"년"+(month+1)+"월"+date+"일",hour+":"+minute+":"+second) ;
var Jane = new Person1("Jane",'1995','student',"전주","104",now3) ;

var now4 = new Date();
//var Bill = new Person1("Bill",'programmer',"경주","105",year+"년"+(month+1)+"월"+date+"일",hour+":"+minute+":"+second) ;
var Bill = new Person1("Bill",'2011','programmer',"경주","105",now4) ;

arr1.push(park);
arr1.push(Marry);
arr1.push(peter);
arr1.push(Jane);
arr1.push(Bill);

var jobs = ["doctor","designer","teacher","student","programmer"] ;



var text1 = "";
text1 +=" <h1>게시판</h1>" ;

text1 +="<table border='1'>" ;
text1 +="    <tr>"  ;
text1 +="    <th>#</th>" ;
text1 +="    <td>이름</td>" ;
text1 +="    <td>생년</td>" ;
text1 +="    <td>직업</td>" ;
text1 +="    <td>사는곳</td>" ;
text1 +="    <td>우편번호</td>" ;
text1 +="    <td>오늘날짜</td>" ;
text1 +="    <td>시간</td>" ;
text1 +="    </tr>" ;

for (var i=0 ; i < arr1.length ; i++) {
text1 +="    <tr>"  ;
text1 +="    <th>"+(arr1.length-i)+"</th>" ;
text1 +="    <td>"+arr1[i].name+"</td>" ;
//text1 +="    <td>"+arr1[i].birthYear+"</td>" ;
text1 +="    <td>"+"<button onclick=\"display("+arr1[i].birthYear+")\">"+arr1[i].birthYear+"</button>"+"</td>" ;
//text1 +="    <td>"+arr1[i].job+"</td>" ;
text1 +="    <td>" ;
text1 +="    <select>" ;
//text1 += +arr1[i].job+
                for(var j=0 ; j < jobs.length ; j++){
text1 +="    <option>"+jobs[j]+"</option>" ;
                if(arr1[i].job == jobs[j]){
text1 +=        "<option selected>"+jobs[j]+"</option>"
                    } else {
text1 +=        "<option>"+jobs[j]+"</option>"
                    }
                }
text1 +="       </select>" ;
text1 += "</td>" ;
text1 +="    <td>"+arr1[i].address+"</td>" ;
text1 +="    <td>"+"<input type=\"text\" size=\"5\"value="+arr1[i].postcode+"></td>" ;
var day = arr1[i].date ;
text1 +="    <td>"+day.getFullYear()+"-"+(day.getMonth()+1)+"-"+day.getDate()+"</td>" ;
text1 +="    <td>"+day.getHours()+":"+day.getMinutes()+":"+day.getSeconds()+"</td>" ;
text1 +="    </tr>" ;

}

function display(birth){
    var now = new Date ;
    var age = now.getFullYear()-birth ;
    alert(age+"몇 살 입니다.") ;
}

text1 += "</table>" ;

document.write(text1);

