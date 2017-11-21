/** Created by JinmanLee on 2017. 11. 20.. ...*/

function abc(def){
    if(def === 'daum' ){
//    var check = confirm('다음이닛');
     site = 'daum';
    }else if(def === 'naver'){
//    var check = confirm('네이버닛');
     site = 'naver';
    }
    var check = confirm(site+'으로 이동합니다');

    console.log("check="+check);
    if(def === 'daum' && check){
        window.open("http://www.daum.net");
    }else if(def === 'naver' && eheck){
        window.open("http://www.naver.com")
    }
}
function btn_mouseover(){
    alert("마우스가 올라갔습니다.");
}
/*function btn_focus() {
    //alert("3글자 이상 작성해 주세요");
}*/
function font_mouseover(){

}