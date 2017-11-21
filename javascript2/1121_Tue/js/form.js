function check() {
    //alert('check 입니다') ;
   // var name = document.frm.name.value ;
    var name = document.getElementById('name').value ;
//    alert(name) ;
    //var id = document.frm.id.value ;
    var id = document.getElementById('id').value ;
    var password = document.frm.password.value ;
    var password2 = document.frm.password2.value ;
    if(name == "" ){
        alert("이름을 입력하세요.") ;
        document.frm.name.focus() ;
        document.querySelector('#name_error').style.display = "block" ;
        document.getElementById('name_error').textContent="이름을 입력하세요."
        return false ;
    }
        document.querySelector('#name_error').style.display = "none" ;
    if( id == "" ) {
        alert("아이디를 입력하세요.") ;
        document.frm.id.focus() ;
        document.getElementById('id_error').textContent="아이디를 입력하세요."
        return false ;
    }
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