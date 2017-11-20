/** Created by JinmanLee on 2017. 11. 15.. .*/

var name = "John" ;
var birth = 20 ;
function getAge(){
    var num = 2017-this.birth ;
    return num;
}

var person = {
    name : 'John' ,
    birth : 2000,
    getAge : function (birthArg) {
        var num = 2017-this.birth ;
        return num ;
    }
}

console.log(person.getAge());
person.birth = 2010 ;
console.log(person.getAge());
person.name = 'Mike';
console.log(person);


/*
var person2 = new Object(); // var person2 = {} ;
person2.name = 'Jane' ;

console.log(person2.name) ;
console.log(person2['name']);
*/

//객체 이름을 building :
// - 나라 : nation - korea
// - 도시 : city - seoul
// - 건축년도 : birth - 1990
// - 건축기간 : period 함수 (현재 - 건축년도)
// - 건축자 : maker "John" , "Jane" , "Mike"

var building = {
    nation : "korea",
    city : "seoul",
    birth : 1990,
    period : function (){
        var nogada = 2017 - this.birth
            return nogada ;
    },
    maker :  [ "John" , "Jane" , "Mike" ]
}

var building2 = new Object();
building2.nation = "Korea" ;

building.nation = "China",
building.city = "Beijing",
building.birth = "2000";
building.maker[0] = "John2" ;
building.maker[1] = "Jane2" ;


// setTimeout( function() { window.open("http://www.naver.com", "네이버새창", "width=500, height=500, resizable=yes" );  } , 2000 );
var i = 0 ;
/*
setInterval(function () {
        console.log("["+i+"] 번째"); i++;
        }, 1000);
*/

//Math.round() ; 반올림
//Math.cell() ; 올림
// math.floor() ; 내림
//setInterval(function () {
//        var num = Math.random() ;
//         console.log(Math.ceil(/*Math.random()*/ (num*10)+1));
//        }, 1000);

var date = new Date ();
console.log(date.getYear()+1900);
console.log(date.getFullYear()+"년");
console.log(date.getMonth()+1+"월");
console.log(date.getDate()+"일");
console.log(date.getDay()+"요일");
console.log(date.getHours()+"시");
console.log(date.getMinutes()+"분");
console.log(date.getMilliseconds()+"초");