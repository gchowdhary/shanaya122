screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";

// to_number="";
to_number = 0;
// to_number = Number(content);
draw_apple = "";

x = 0;
y = 0;



function preload() {
    // add apple.png 
    apple = loadImage("apple.png");
}


var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening, please speak.";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript;
    console.log(content)
    document.getElementById("status").innerHTML = "The speech has been recognised as: " + content;
    to_number = Number(content);
    console.log(to_number)
    console.log(Number.isInteger(to_number))
    // if the user has input a Number, display message "started drawing apple"
    // and set the variable draw_apple to set 

    if (Number.isInteger(to_number)) {
        document.getElementById("status").innerHTML = "Started drawing apple ";
        draw_apple = "set";
    } else {
        document.getElementById("status").innerHTML = "The speech has not recognized a number ";
    }
    // ----------------------------------------------------------------------------------
}

function setup() {
    // we pick the width of the screen using window.innerWidth and store in var screen_width 
    screen_width = window.innerWidth;

    // we pick the height of the screen using window.innerHeight and store in var screen_height
    screen_height = window.innerHeight;

    // this is wrong canvas = createCanvas(900, 600);
    // replace 900,600 with var values
    canvas = createCanvas(innerWidth, innerHeight);

    // not requireed canvas.position(Math.floor(Math.random(0, 150)));
    canvas.position(0, 150);
}

function draw() {
    // if (draw_apple == "set") {
    //     radius = Math.floor(Math.random() * 100);
    //     circle(x, y, radius);
    //     document.getElementById("status").innerHTML = "Apple is being drawn";
    //     draw_apple = "";
    // }

    if (draw_apple == "set") {
        // we start with for loop to draw the number of apples 
        for (var i = 1; i <= to_number; i++) {
            // we pick random places within specified width (700) & height(400)
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(apple, x, y, 50, 50);
        }
        document.getElementById("status").innerHTML = to_number + " Apples drawn";
        speak_data = to_number + "Apples drawn";
        speak();
        draw_apple = "";
    }

}

function speak() {
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

// Define a variable speak_data to hold the speech which we want the system to speak and set it to empty.
// Then define a variable to_number to hold the number said by the user and set it to empty.



// if (Number.isInteger(to_number)) {
//     document.getElementById("status").innerHTML = "Started drawing an apple!";
//     draw_apple = "set";
//     screen_width = window.innerWidth;
// } else {
//     document.getElementById("status").innerHTML = "The speech has not recognized a number";
// }




// if (content == "draw ") {
//     x = Math.floor(Math.random() * 900);
//     y = Math.floor(Math.random() * 600);

// }

// for (var i = 1; i <= to_number; i++) {
//     x = Math.floor(Math.random() * 700);
//     y = Math.floor(Math.random() * 600);
//     image(apples, x, y, 50, 50);
// }