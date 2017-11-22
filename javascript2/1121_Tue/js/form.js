function email_check( email ) {

    var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return (email != '' && email != 'undefined' && regex.test(email));

}

function check() {
    //alert('check 입니다') ;
   // var name = document.frm.name.value ;
    var name = document.getElementById('name').value ;
//    alert(name) ;
    //var id = document.frm.id.value ;
    var id = document.getElementById('id').value ;
    var password = document.frm.password.value ;
    var password2 = document.frm.password2.value ;
    var job = document.frm.job.value ;
    var gender = document.frm.gender.value ;
    var email = document.getElementById('email').value ;
    var languageCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    var englishCheck = /^[A-Za-z0-9+]*$/;

    //var hobby = document.frm.hobby.value ;
    //var job = document.frm.job.selectedIndex ;

    function addFocusName(){
        var param = document.getElementById('name').value;
        if(param == "" ){
            document.getElementById("name_error").textContent="이름을 입력하세요" ;
        }
    }
    function addBlurName(){
        console.log("blur");
        var param = document.getElementById('name').value ;
        if(param !== "") {
            console.log("if") ;
            document.getElementById("name_error").textContent="" ;
        } else{
            console.log('else');
        }
    }

    if(name == "" ){
        alert("이름을 입력하세요.") ;
        document.frm.name.focus() ;
       /* document.querySelector('#name_error').style.display = "block" ;
        document.getElementById('name_error').textContent="이름을 입력하세요."*/
        document.getElementById('name').addEventListener('focus',addFocusName);
        document.getElementById('name').addEventListener('blur',addBlurName);
        return false ;
    }
        if ( !languageCheck.test(name) ) {
             alert("한글만 입력해야됩니다.") ;
             return false ;
    }

    if( ! email_check(email) ){
        alert('이메일 형식이 잘못됬습니다.') ;
        document.frm.email.focus();
        return false ;
    }

        //document.querySelector('#name_error').style.display = "none" ;
    if( id == "" ) {
        alert("아이디를 입력하세요.") ;
        document.frm.id.focus() ;
        document.getElementById('id_error').textContent="아이디를 입력하세요."
        return false ;
    }
    if(!englishCheck.test(id)){
        alert('아이디는 영문과 숫자만 입력합니다.');
        document.frm.id.focus();
        return false;

    if(password == "" ){
        alert("비밀번호를 입력하세요") ;
        document.frm.password.focus() ;
        document.getElementById('password_error').textContent="비밀번호를 입력하세요."
        return false ;
    }
    if(password2 == ""){
        alert("패스워드 확인을 입력하세요") ;
        document.frm.password2.focus() ;
        document.getElementById('password2_error').textContent="비밀번호 확인을 입력하세요."
        return false ;
    }

    if( job == "" ){
        alert("직업을 선택해주세요") ;
        document.frm.job.focus();
        return false;
    }
    if ( gender == "" ){
        alert("성별을 선택하세요") ;
        //document.frm.gender.focus() ;
        return false ;
    }

    console.log(password+"~"+password2) ;
    //패스워드 2개를 비교해서 같이 않으면 처리해주세요.
    if(password2 !== password){
        alert("무언가 틀렸습니다.") ;
        document.frm.password2.value = "" ;
        document.frm.password2.focus() ;
        return false ;
    }
    var chk = confirm('입력된 데이터를 서버로 전송합니다') ;
    if(chk){
        console.log("name="+name+", id="+id) ;
        document.frm.submit() ;
    } else {
        return false ;
    }
}