/** Created by JinmanLee on 2017. 11. 15.. ...*/
/*

var name = "John" ;
var name2 = 'Janne' ;
var number = 20 ;
var check = true ;
var check2 = false ;

function displayCon(){
    console.log("안녕하세요") ;
}

var displayCon2 = function () {
    console.log("안녕하세요 2.......") ;
}

var arr = [ "John" , "Jane" , "Mark" , "Tom" ] ;
var arr2 = new Array("John2" , "Jane2" , "Mark2" , "Tom2");
var arr3 = [10, 11,12,13,14,15,16,17,18,19 ] ;
var arr4 = [ "John" , 11 , true , arr2 , displayCon2 ] ;

document.write(arr) ;

var tag = "<h1>안녕하세요</h1>" ;
document.write(tag);


var number2 = 10 ;              console.log(number2); //10
number2 = number2+1 ;            console.log(number2); //11
number2++ ;                      console.log(number2) ; //12
number2 += 1 ;                   console.log(number2) ; //13

number2 += 3 ;                   console.log(number) ; // num = njm

for(i=0 ; i < 10 ; i++) {
    console.log(i);
}
*/

 //짝수만 출력
/*

 for(i=0 ; i < 20 ; i+=2) {
    console.log(i);
 }

var num3 = 10/2 ;
var num4 = 11%2 ;
var number = 0;
var name ; // name="john" ;


if(name) {
    console.log("number true")
} else {
    console.log("number false")
}

 for(i=0 ; i < 20 ; i++) {
      if( i%2 ){
          console.log(i);
      }
 }
*/
/*

for(var i=8 ; i < 10 ; i++) {
*/
/*
    if( i == 1 ){
    //1 일때는 "안녕하세요"
    console.log("안녕하세요") ;
        }else if( i == 5 ){
    //5 일때는 "절반입니다."
    console.log("절반입니다.") ;
            } *//*

            if( i == 8 ){
    //8 일때는 "거의 끝나갑니다"
    console.log("거의 끝나갑니다.") ;
                }else{
        // 나머지는 숫자 출력
       console.log(i+" num") ;
       }
}
*/

// <= , >= , && , ||
/*


for(var i=0 ; i< 10 ; i ++) {
     if ( i > 3 && i <= 7 ) {
     //3보다 크고, 7보다 작거나 같으면 "안녕하세요" 출력
        console.log("안녕하세요");
    }else if ( i == 8 ) {
        //8일 때는 거의 끝나갑니다"
        console.log("거의 끝나갑니다");
    } else {
        //나머지는 숫자 출력
        console.log (i +" num") ;
    }
}
*/

/*
var i = 0 ;
// i 가 10보다 크거나 같을 때 빠져나온다
while (true) {
    i++ ;
    if( i >= 10){
             break;
    }
    console.log(i);
}
*/
/*
var i = 0 ; //i가 10보다 크거나 같을 때 빠져나온다.
while ( i < 10 ) {
    i++ ;
    console.log("true"+i)
}*/
/*


var col         = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
var col1        = [11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20];
var col2        = [21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30];
var col3        = [31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40];
var col4        = [41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 , 49 , 50];
var col5        = [51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60];
var col6        = [61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 , 69 , 70];
var col7        = [71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79 , 80];
var col8        = [81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 , 89 , 90];
var col9        = [91 , 92 , 93 , 94 , 95 , 96 , 97 , 98 , 99 , 100];

var row = [ col , col1 , col2 , col3 , col4 ,col5 , col6 , col7 ,col8 , col9];


console.log(col[3]);
console.log(col.length);
console.log("ㅎㅎㅎ")

for (i = col.length ; i <= col.length ; i++){
    console.log(col[5]) ; //개별 원소들이 출력
}

col.push(11);

var col10 = [] ; ; //100~ 120 ;

for(i=100 ; i < 121 ; i++){
    col10.push(i);
}

console.log(col10)
*/
/*


var col         = [ 1 ,  2 ,  3 ,  4 ,  5 ,  6 ,  7 ,  8 ,  9 , 10]
var col1        = [11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20];
var col2        = [21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30];
var col3        = [31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40];
var col4        = [41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 , 49 , 50];
var col5        = [51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60];
var col6        = [61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 , 69 , 70];
var col7        = [71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79 , 80];
var col8        = [81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 , 89 , 90];
var col9        = [91 , 92 , 93 , 94 , 95 , 96 , 97 , 98 , 99 , 100];

var row = [ col , col1 , col2 , col3 , col4 ,col5 , col6 , col7 ,col8 , col9];

console.log(row[ 0 ][ 0 ]) ;
console.log(row[ 0 ][ 0 ] ) ;

for( i=0 ; i < row.length ; i++ ) {
    console.log(row[i]) ;
}

for( i=0 ; i < row.length ; i ++) {
    for( a = 0 ; a < row[i].length ; a++ ) {
        console.log(row[i][a]);
    }
}
*/

//1~100 까지 입력하고 , 출력하는 2차원 배열

var go = [];
/*

for( i =0 ; i <= 100 ; i++) {
    go.push(i)
}
*/

/*
var arr = [] ;//**** new Array()
for(var i = 0 ; i < 10 ; i++) {

    arr[i] = [] ;//***

    for(var j = 0 ; j < 10 ; j++) {

        var num = i*10 + j+1 ;//*****
        arr[i][j] = num ;
        console.log(num)
    }
}

for(var 1=0 ; i <arr.length ; i++ ){
    for(var j=0 ; j < arr[i].length ; j++) {
        console.log(arr[i][j]);
    }
}
*/