//Dictionary Assignment
function my_Dictionary(){
    var Student = {
        Name:"Rose",
        Age:"8",
        Gender:"Female",
        Grade:"3",
    };

    
    document.getElementById("Dictionary").innerHTML = Student.Grade;
}

//Delete Assignment
function my_Dictionarytwo(){
    var Student = {
        Name:"Rose",
        Age:"8",
        Gender:"Female",
        Grade:"3",
    };

    delete Student.Grade;
    document.getElementById("Dic").innerHTML = Student.Grade;
}