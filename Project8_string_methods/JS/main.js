//Concat()Assignment
function dateof_birth(){
    var Year = "1986";
    var Month = "November";
    var Date = "27";
    var Dateofbirth = Year.concat(" ", Month," ", Date);
    document.getElementById("Concatenate").innerHTML = Dateofbirth;
    
}

//Slice Assignment
function slice_Method(){
    var Sentence = "All day working jhon not playing";
    var Section = Sentence.slice(16,20);
    document.getElementById("Slice").innerHTML = Section;
}

//Uppercase
var Text = "hello world";
document.write(Text.toUpperCase());

//Search
var Sentence = "I love JavaScript";
document.write("<br><br>");
document.write(Sentence.search("JavaScript"));

// Number Methods Assignment
function number_Method() {
    var Number = 1986;
    var StringNumber = Number.toString();

    document.getElementById("Number").innerHTML = StringNumber;
}

//toPrecision() Method
function precision_Method(){
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}