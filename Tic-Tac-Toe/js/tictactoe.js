//This variable keeps track of whose turn it is.
let activePlayer = 'X';

//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square.
function placeXorO(squareNumber) {

    //This condition ensures a square hasn't been selected already.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {

        //This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);

        //This condition checks who's turn it is.
        if (activePlayer === 'X') {

            //If activePlayer is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("images/x.png")';

        } else {

            //If activePlayer is equal to 'O', the o.png is placed in HTML.
            select.style.backgroundImage = 'url("images/o.png")';
        }

        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);

        //This calls a function to check for any win conditions.
        checkWinConditions();

        //This condition is for changing the active player.
        if (activePlayer === 'X') {

            //If active player is 'X', change it to 'O'.
            activePlayer = 'O';

        } else {

            //Change the activePlayer to 'X'.
            activePlayer = 'X';
        }

        //This function plays placement sound.
        audio('./media/place.mp3');

        //This condition checks to see if it is the computer's turn.
        if (activePlayer === 'O') {

            //This function disables clicking for computer's turn.
            disableClick();

            //This function waits 1 second before the computer places an image.
            setTimeout(function () {
                computersTurn();
            }, 1000);
        }

        //Returning true is needed for our computersTurn() function to work.
        return true;
    }

    return false;
}


//This function results in a random square being selected by the computer.
function computersTurn() {

    //This boolean is needed for our while loop.
    let success = false;

    //This variable stores a random number 0-8.
    let pickASquare;

    //This condition allows our while loop to keep trying if a square is selected already.
    while (!success) {

        //A random number between 0 and 8 is selected.
        pickASquare = String(Math.floor(Math.random() * 9));

        //If the random number evaluated returns true,
        //the square hasn't been selected yet.
        if (placeXorO(pickASquare)) {

            //This changes our boolean and ends the loop.
            success = true;
        }
    }
}

//This function pasrses selectedSquares array to search for win condition.
//draw line() function is called to draw a line on the screen if the condition is met.
function checkWinConditions(){
    //x 0,1,2 condition.
    if(arrayIncludes('0x', '1x', '2x')) {drawLine(50,100,558,100)}
    //x 3,4,5 condition.
    else if(arrayIncludes('3x', '4x', '5x')) {drawLine(50,304,558,304)}
    //x 6,7,8 condition.
    else if(arrayIncludes('6x', '7x', '8x')) {drawLine(50,508,558,508)}
    //x 0,3,6 condition.
    else if(arrayIncludes('0x', '3x', '6x')) {drawLine(100,50,100,558)}
    //x 1,4,7 condition.
    else if(arrayIncludes('1x', '4x', '7x')) {drawLine(304,50,304,558)}
    //x 2,5,8 condition.
    else if(arrayIncludes('2x', '5x', '8x')) {drawLine(508,50,508,558)}
    //x 6,4,2 condition.
    else if(arrayIncludes('6x', '4x', '2x')) {drawLine(100,508,100,510)}
    //x 0,4,8 condition.
    else if(arrayIncludes('0x', '4x', '8x')) {drawLine(100,100,520,520)}
    //O 0,1,2 condition.
    else if(arrayIncludes('0O', '1O', '2O')) {drawLine(50,100,550,100)}
    //O 3,4,5 condition.
    else if(arrayIncludes('3O', '4O', '5O')) {drawLine(50,304,558,304)}
    //O 6,7,8 condition.
    else if(arrayIncludes('6O', '7O', '8O')) {drawLine(50,508,558,508)}
    //O 0,3,6 condition.
    else if(arrayIncludes('0O', '3Ox', '6O')) {drawLine(100,50,100,558)}
    //O 1,4,7 condition.
    else if(arrayIncludes('1O', '4O', '7O')) {drawLine(304,50,304,558)}
    //O 2,5,8 condition.
    else if(arrayIncludes('2O', '5O', '8O')) {drawLine(508,50,508,558)}
    //O 6,4,2 condition.
    else if(arrayIncludes('6O', '4O', '2O')) {drawLine(100,508,100,510)}
    //O 0,4,8 condition.
    else if(arrayIncludes('0O', '4O', '8Ox')) {drawLine(100,100,520,520)}

    //this condition check for a tie. If none of the above conditions are met and
    //9 squares are selected the code executes
    else if(selectedSquares.length >=9){
        //this function plays the tie game sound
        audio('./media/tie.mp3');
        //This fucntion sets a.3 second timer before the resetGame is called
        setTimeout(function(){resetGame();},500);
    }  

    //This function checks if an array includes 3 strings. It is used to check for 
    //each win condition
    function arrayIncludes(squareA,squareB,squareC){
        //These 3 variables will be used to check for 3 in a row.
        const a= selectedSquares.includes(squareA);
        const b= selectedSquares.includes(squareB); 
        const c= selectedSquares.includes(squareC);
        //If the 3 variables we pass are all included in our array then 
        //True is returned and our else if condition executes the drawLine() function.
        if(a === true && b === true && c === true) {return true;}

    }

}


//This function makes our body element temporarily unclickable
function disableClick(){
    //This makes our body unclickable 
    body.style.pointerEvents ='none';
    //This makes our body clickable again after 1 second
    setTimeout(function(){ body.style.pointerEvents ='auto';}, 1000);

}

//This function takes a string parameter of the path you set earlier for 
//Placement sound ('./media/place.mp3')
function audio(audioURL) {
    //We create a new audio object and we pass the path as aparameter.
    let audio= new Audio(audioURL);
    //Play method plays our audio sound
    audio.play();

}

//This function utilizes HTML canvas to draw win lines
function drawWinLine(coordX1,coordY1,coordX2,coordY2){
//This line access pur HTML canvas element
const canvas = document.getElementById('win-lines');
//This line gives us access to methods and properties to use on canvas.
const c = canvas.getContext('2d');
//This line indicates where the start of a lines x axis is
let x1 = coordX1,
    //This line indicates where the start of a lines y axis is
    y1 = coordY1,
    //This line indicates where the start of a lines x axis is
    x2 = coordX2,
    //This line indicates where the start of a lines y axis is
    y2 = coordY2,
    //This variable stores temporary x axis data we update in our animation loop
    x = x1,
    //This variable stores temporary x axis data we update in our animation loop
    y = y1;


//This function interacts with the canvas
function animateLineDrawing(){
    //This variable creates a loop
    const animationLoop = requestAnimationFrame (animateLineDrawing);
    //This method clears content from the last loop iteration
    c.clearRect(0,0,608,608);
    //This method starts a new path
    c.beginPath();
    //This method moves us to a startimg point in our life
    c.moveTo(x1,y1);
    //This method indicates end point in our life
    c.lineTo(x,y)
    //This method sets the width of our line
    c.lineWidth =10;
    //This method sets the color of our line
    c.strokeStyle ='rgba(70,255,33,.8)';
    //This method draws everything we laid out above
    c.strokeStyle ='red';
    c.stroke();
    //This con dition checks if we have reached the endpoints.
    if (x1 <= x2 && y1 <= y2){
        //This condition adds 10 to the previous end x endpoint
        if(x < x2) {x += 10;}
        //This condition adds 10 to the previous end y endpoint
        if (y < y2) {y += 10;}
        //This condition is similar to the one above
        //This is necessary for the 6,4,2 win condition
        if(x >= x2 && y >= y2) {cancelAnimationFrame (animationLoop);}

        }
    

    //This condition is similar to the one baove
    //This is necessary for the 6,4,2 win condition
    if(x1 <= x2 && y1 >= y2){
        if(x < x2) {x += 10;}
        if(y > y2) {y -= 10;}
        if(x >= x2 && y <= y2) {cancelAnimationFrame (animationLoop);}

    }
}



//This function clears our canvas after our win line is drawn
    function clear(){
        //This line starts ur ani animation loop
        const animationLoop = requestAnimationFrame(clear);
        //This line clears our canvas
        c.clearRect(0,0,608,608);
        //This line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }


    //This line disallows clicking while the win sound is playing
    disableClick();
    //This line plays the win sound
    audio('./media/winGame.mp3');
    //This line calls our main animation loop
    animateLineDrawing();
    //This line waits 1 second. Then, clears canvas, reset game, an allows clicking again.
    setTimeout(function () {clear(); resetGame();}, 1000);  

}

//Disables click during teh computers turn
function diableClick(){
    body.style.pointerEvents = 'none';
    setTimeout(function(){body.style.pointerEvents = 'auto';},1000);
}

//This function resets the game in the event of a tie or a win
function resetGame(){
    //This for loop iterates through each HTML square element
    for (let i = 0; i < 9; i++){
        //This variable gets the HTML element i.
        let square = document.getElementById(String(i));
        //This removes our elements background Image
        square.style.backgroundImage = '';

    }
    //This resets our array so it is empty and we can start over
    selectedSquares = [];
}





