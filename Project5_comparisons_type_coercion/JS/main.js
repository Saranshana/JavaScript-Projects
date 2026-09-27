//Typeof Assignment
var studentName = "Rose";
document.write(typeof studentName); 

var studentName = "Rose";
document.write("<br>The data type of the student name is : " +typeof studentName);


//Type Coercion Assignment
var num=10;
var text ="5";
var result= num + text;
document.write("<br>The result is: " + result);
document.write("<br>The data type is: " + typeof result);
document.write("<br><br>");

//Infinity function
function infinity_Function() {

    var positiveInfinity = 1.7976931348623157e308 * 2;
    var negativeInfinity = -1.7976931348623157e308 * 2;

    document.getElementById("Infinity").innerHTML = positiveInfinity;
    document.getElementById("NegativeInfinity").innerHTML = negativeInfinity;

}


//Boolean Assignment
function boolean_Function(){
    document.write("Boolean Assignement");
    document.write("<br>");
    document.write(10 > 5);
    document.write("<br>");
    document.write(10 < 5);
    document.write("<br>");
}
  
boolean_Function();

    //console.log assignent
  
    console.log(10 + 5);
    

//Boolean console.log challenge
console.log(10>20);  
document.write("<br>"); 

//Double Equals signs Assignment
document.write("Double Equal Sign Assignment");
document.write("<br>");
document.write(10 == 10);
document.write("<br>");
document.write(10 == 5);
document.write("<br>");

//Triple Equal Sign Assignemnt
document.write("<br>");document.write("<br>");
document.write("<br>");
document.write("Triple Equal sign Assignment");
document.write("<br>");

x = 10; //Return True
y = 10;
document.write(x === y);
document.write("<br>");

A = "Rosy"; //Return False
B ="Peter";
document.write(A === B);
document.write("<br>");

C = 5;
D = "5";
document.write(C === D);
document.write("<br>");

E = 10;
F = 5;
document.write(E === F);
document.write("<br><br>");

//And Operator Assignemnt
document.write("And Operator Assignment");
document.write("<br>");
document.write(5 > 4 && 10 > 5);
document.write("<br>");

document.write(5 < 3 && 10 < 15);
document.write("<br>");

document.write(5 < 3 || 10 < 15);
document.write("<br>");

document.write(5 > 3 || 10 < 5);
document.write("<br><br>");

//Not Operator Assignemnt
document.write("Not Operator Assignement");
document.write("<br>");
document.write(!(5 > 3));
document.write("<br>");

document.write(!(5 < 3));
document.write("<br>");