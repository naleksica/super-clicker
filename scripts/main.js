// Number of circles in the game
var circles = 8;

// Array to store circle IDs
const circleId = ["#circle0", "#circle1", "#circle2", "#circle3", "#circle4", "#circle5", "#circle6", "#circle7"];

// Array to track circle status
var circleStatus = [];

// Variable to check if circles are too close to each other
var tooClose;

// Minimum proximity between circles based on screen size
if(window.innerWidth<1028) var minProximity = 50;
else minProximity = 150;

// Variables for width, height, circle heights, circle widths, difficulty, start time, elapsed time, interval, countdown, and count
var width;
var height;
var circleHeights;
var circleWidths;
var difficulty;
var startTime;
var elapsedTime;
var interval;
var countdown;
var count;


// Timer interval to update the elapsed time
interval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    if(document.querySelector("#timer") !== null) document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(2);
}, 100);


// Function to generate a random height within the screen bounds
function randomHeight() {

    var randomHeight = Math.floor(Math.random() * window.innerHeight/1.15);
    if(randomHeight<80) randomHeight = 100;
    return randomHeight;

}


// Function to generate a random width within the screen bounds
function randomWidth() {

    var randomWidth = Math.floor(Math.random() * window.innerWidth/1.15);
    if(randomWidth<80) randomWidth = 100;
    return randomWidth;

}


// Function to check if circles are too close to each other
function checkProximity() {

    for(let i = 0; i < circleHeights.length; i++) {
            if(circleHeights[i] == height || circleWidths[i] == width) {
                tooClose = true;
                break;
            } else if(Math.abs(circleHeights[i] - height) <= minProximity && Math.abs(circleWidths[i] - width) <= minProximity) {
                tooClose = true;
                break;
            } else if(Math.abs(circleHeights - height) <= -minProximity && Math.abs(circleWidths - width) <= -minProximity) {
                tooClose = true;
                break;
            } else tooClose = false;
        };

};


// Function to initialize the game
function gameInit(intervalTime) {

    for(let i = 0; i < circleId.length; i++) {
        document.querySelector(circleId[i]).style.animation = "scaleUp .5s ease-in";
        setTimeout(() => {
            document.querySelector(circleId[i]).style.transform = "scale(1)"
        }, 500);
    };

    document.querySelector(".timer-span").innerHTML = "0.00";
    difficulty = intervalTime;
    var circlesInit = 0;
    circleHeights = [];
    circleWidths = [];
    count = 5;
    clearInterval(countdown);

    document.querySelector(".menu").style.display = "none";
    document.querySelector(".success").style.display = "none";
    document.querySelector(".countdown").style.display = "flex";

    setTimeout(() => {
        startTime = Date.now();
        document.querySelector(".timer-span").setAttribute("id", "timer");
    }, 5000);

    document.querySelector("#countdown").innerHTML = count;
    countdown = setInterval(() => {
        count--;
        document.querySelector("#countdown").innerHTML = count;
        if(count<1) document.querySelector(".countdown").style.display = "none";
    }, 1000);

    while(circlesInit<8) {

        width = randomWidth();
        height = randomHeight();
        checkProximity();
        if(!tooClose) {
            circleWidths.push(width);
            circleHeights.push(height);
            document.querySelector(circleId[circlesInit]).style.left = width+"px";
            document.querySelector(circleId[circlesInit]).style.top = height+"px";
            circlesInit++;
        };
    
    };

    document.querySelector("#playAgain").addEventListener("click", () => {
        gameInit(difficulty);
    });

    document.querySelector("#changeDifficulty").addEventListener("click", () => {
        document.querySelector(".menu").style.display = "flex";
    });

};


// Function to update the circles when clicked
function circleUpdate() {

    var currId = event.target.id;
    if(!circleStatus.includes(currId)) {
        circles--;

        document.querySelector("#"+currId).style.animation = "scaleDown .5s ease-in";
        if(circles == 0) {
            document.querySelector(".success").style.display = "flex";
            document.querySelector("#finalTime").innerHTML = "Your final time was: <span>" + document.querySelector("#timer").innerHTML + "</span> seconds";
            document.querySelector(".timer-span").removeAttribute("id");
        };

        setTimeout(() => {

            for(let i = 0; i < circleId.length; i++) {
                if("#"+currId == circleId[i]) {
                    tooClose = true;
                    while(tooClose) {
                        width = randomWidth();
                        height = randomHeight();
                        checkProximity();
                    };

                    circleHeights = circleHeights.filter(function(item) {
                        return item !== circleHeights[i];
                    });
                    circleWidths = circleWidths.filter(function(item) {
                        return item !== circleWidths[i];
                    });
                    if(!tooClose) {
                        document.querySelector(circleId[i]).style.left = width+"px";
                        document.querySelector(circleId[i]).style.top = height+"px";
                        circleHeights.splice(i, 0, height);
                        circleWidths.splice(i, 0, width);
                        break;
                    };
                };
            };

            document.querySelector("#"+currId).style.transform = "scale(0)";

            setTimeout(() => {

                document.querySelector("#"+currId).style.animation = "scaleUp .5s ease-in";
                setTimeout(() => {
                    document.querySelector("#"+currId).style.transform = "scale(1)"
                    circles++;
                    circleStatus = circleStatus.filter(function(item) {
                        return item !== currId;
                    });
                }, 500);

            }, difficulty);

        }, 500);
        circleStatus.push(currId);
    };
    
};


// Function to go back to the main menu
function backToMenu() {

    document.querySelector(".menu").style.display = "flex";
    document.querySelector(".timer-span").removeAttribute("id");
    document.querySelector(".timer-span").innerHTML = "0.00";

};