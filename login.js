
/*function validate(){


if( document.getElementsByName.myForm.Name.value == "" ) {
    alert( "Please provide your name!" );
    document.myForm.Name.focus() ;
    return false;
 }
 
}*/
 var username=document.getElementById("username").value;
 var psw=document.getElementById("psw").value;

 function validate(){
    if(username=="")
    {
        alert("Enter your username ");
    }
    else if(psw==""){
        alert("Enetr your 8 digit password");
    }
    else alert("Thankyou for Login");
 }

 clear=()=>{
    document.getElementById("username").value="";
    document.getElementById("psw").value=""
    document.myForm.username.focus();
 }

