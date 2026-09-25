
//This function combines the firstname andlast name
function myfunction() {
    
    //Store the firstname in a variable
    var firstname = "Peter";
    
    //Store the last name in a variable
    var lastname = "John";

    //Use the += operator to add the last name
    //to the first name with a space between them
    firstname += " " + lastname;

    document.getElementById("demo").innerHTML = firstname;
}


    
