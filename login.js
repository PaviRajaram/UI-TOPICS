 
 function validate(){
     var uname=document.getElementById("username").value;
     var pswd=document.getElementById("psw").value;

    if(uname=="")
    {
        alert("Enter your username ");
    }
    else if(pswd==""){
        alert("Enetr your 8 digit password");
    }
    else alert("Thankyou for Login");
 }

 clear=()=>{
    document.getElementById("username").value="";
    document.getElementById("psw").value=""
   
 }

