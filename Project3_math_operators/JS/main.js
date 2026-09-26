
//Addition
function addition_Function(){
    var addition = 5 +5;
    document.getElementById("Math").innerHTML ="5 + 5 = " + addition;
    
}

//SUbtraction Assignment
function subtraction_Function(){
    var subtraction = 8-5;
    document.getElementById("sub").innerHTML ="8 - 5 = " +subtraction;
}

//Multiplication Assignment
function multiplication_Function(){
    var multiplication = 5*5;
    document.getElementById("mul").innerHTML ="5 x 5 = " +multiplication;
}

//Multiple Operators Assignement
function moremath_Function(){
    var simplemath = (5+5)*10/2-8;
    document.getElementById("more").innerHTML = "5 plus 5, multiplied by 10, divided  subtracted by 8 equals " +simplemath;
}

//
function math_Function(){
    var simple_math = (5+5)*10/2-8;
    document.getElementById("sum").innerHTML = "(5 + 5) x 10 / 2 - 8 =  " +simple_math;
}
 //Modulus Operator
function modulus_Function(){
    var modulus_math = 20 % 2;
    document.getElementById("mod").innerHTML = " 20 % 2 = " +modulus_math;
}

//Negation OPerator Assignemnt
function negation_Operator(){
    var x = 5;
    document.getElementById("neg").innerHTML = -x;
}

//Increment Operator
function increment_Operator(){
    var x = 5;
    x++;
    document.getElementById("inc").innerHTML = " Increment: " +x;
}

//Decrement Operator
function decrement_Operator(){
    var x= 5;
    x--;
    document.getElementById("dec").innerHTML = "Decrement: " +x;
}

//Math.random Assignemnt
window.alert(Math.random() * 100);