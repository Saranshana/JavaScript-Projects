
//Loop Assignment
function call_Loop() {
    let count = 1;
    let result = "";

    while (count <= 5) {
        result += count + "<br>";
        count++;
    }

    document.getElementById("Loop").innerHTML = result;
}

//For Loop Assignment
function for_Loop() {
    let Instruments = ["Guitar", "Piano", "Drums", "Violin", "Flute"];
    let Content = "";

    for (let i = 0; i < Instruments.length; i++) {
        Content += Instruments[i] + "<br>";
    }

    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//document.getElementById().innerHTML Assignment
function array_Function(){
    let Instruments = ["Guitar", "Piano", "Drums", "Violin", "Flute"];

    document.getElementById("Array").innerHTML = Instruments[0];
}


const Instrument = {
    type: "Guitar",
    brand: "Fender",
    color: "Black"
};

//Change property value
Instrument.color = "Red";

// Add a new property with a value
Instrument.price = "$500";

////Const Keyword Assignment
function constant_function() {
    document.getElementById("Constant").innerHTML =
        "My instrument is a " + Instrument.color +
        " " + Instrument.brand +
        " " + Instrument.type +
        " and it costs " + Instrument.price + ".";
}

function constant_function() {
    document.getElementById("Constant").innerHTML =
        "My instrument is a " + Instrument.color + " " + Instrument.brand + " " + Instrument.type + ".";
}


//Let Assignment
function let_Function() {
    var y = 80;
    let x = 32;

    document.getElementById("Let").innerHTML = y + "<br>" + x;
}

//Object Assignment
let car ={
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "Red",
    description: function(){
        return "The car is a" + " " +this.year + " " + this.model +" "  + this.color + " " +this.make;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
