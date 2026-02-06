function validate(){
    let valid=true;
    let name=document.getElementById("name").value;
    if(name==""){
        document.getElementById("nameError").innerText="Name is required";
        valid=false;
    }else{
        document.getElementById("nameError").innerText="";
    }
    let email=document.getElementById("email").value;
    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email==""){
        document.getElementById("emailError").innerText="Email is required";
        valid=false;
    }
    else if(!emailPattern.test(email)){
        document.getElementById("emailError").innerText="Email not valid";
        valid=false;
    }
    else{
        document.getElementById("emailError").innerText="";
    }
    let phone=document.getElementById("phone").value;
    if(phone==""){
        document.getElementById("phoneError").innerText="Phone number is required";
        valid=false;
    }else{
        document.getElementById("phoneError").innerText="";
    }
    let password=document.getElementById("password").value;
    if(password==""){
        document.getElementById("passwordError").innerText="Password is required";
        valid=false;
    }else if(password.length<5){
        document.getElementById("passwordError").innerText="Password must be atleast 6 digits"
    }
    else{
        document.getElementById("passwordError").innerText="";
    }
    let confirm=document.getElementById("confirmpassword").value;
    if(confirm==""){
        document.getElementById("confirmpasswordError").innerText="You need to confirm password";
        valid=false;
    }
    else if(password!=confirm){
        document.getElementById("confirmpasswordError").innerText="Password Mismatch";
    }
    else{
        document.getElementById("confirmpasswordError").innerText="";
    }
    let file=document.getElementById("photo").value;
    if(file==""){
        document.getElementById("fileErrorr").innerText="Select a file";
        valid=false;
    }else{
        document.getElementById("fileError").innerText="";
    }
    return valid;

}