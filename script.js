function loginUser(){

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

if(username==="admin" && password==="1234"){
alert("Login Successful");
window.location.href="index2.html";
return false;
}
else{
alert("Invalid Username or Password");
return false;
}

}

let form=document.getElementById("appointmentForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("msg").innerText="Appointment Booked Successfully!";

});

}