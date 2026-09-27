//Global Variable Assignment
var x = 10;
function Add_Numbers_1(){
    document.write(20 + x +"<br>");
}

function Add_Numbers_2(){
    document.write(x + 100 + "<br>");

}

Add_Numbers_1();
Add_Numbers_2();

//Method Assignment (IF)
function getGreeting() {
    var hour = new Date().getHours();

    if (hour < 12) {
        document.getElementById("Greeting").innerHTML = "Good morning!";
    } else {
        document.getElementById("Greeting").innerHTML = "Good afternoon!";
    }
}

//IF Else assignment 
var age = 20;

if (age >= 18) {
    document.write("You are 18 or older.");
    document.write("<br>");
}

//Else Assignment
function checkAge() {
    var age = document.getElementById("Age").value;

    if (age >= 18) {
        document.getElementById("Result").innerHTML = "You are 18 or older.";
    } else {
        document.getElementById("Result").innerHTML = "You are under 18.";
    }
}

//Else if Assignment
function Time_Function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is a morning time!";
    }

    else if(Time >= 12 == Time < 18){
        Reply = "It is afternoon!";
    
    }

    else{
        Reply="It is evening time!";
    } 
document.getElementById("Time_of_day").innerHTML = Reply;
}