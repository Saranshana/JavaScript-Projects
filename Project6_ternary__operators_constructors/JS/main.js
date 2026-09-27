
//Ternary Operator Assignment
function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height<52) ? "You are too short": "You are tall enough";
    document.getElementById("ride").innerHTML = Can_ride + " to ride";
} 

//Ternary Operator Challenge
function Vote_Function(){
    var Age , Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age<18) ? "You are not old enought to vote" : "You are old enough";
    document.getElementById("vote").innerHTML = Can_Vote + " to vote";
}

//Code Assignment
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + " -colored " + Erik.Vehicle_Model + " manufactured in" + Erik.Vehicle_Year;
}


//New Keyword Assignment
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");

function myFunctionnew() {
    document.getElementById("New_and_This").innerHTML =
        "Jack drives a " + Jack.Vehicle_Color + "-colored " +
        Jack.Vehicle_Make + " " + Jack.Vehicle_Model +
        " manufactured in " + Jack.Vehicle_Year;
}

//Nested Assignment
function count_Function(){
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count(){
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}