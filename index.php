<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta title="">
    <meta description="">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap" rel="stylesheet">
    <title>Super Clicker</title>
    <link rel="stylesheet" href="styles/reset.css">
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    
    <header>

    </header>

    <main>
        <div class="menu">
            <div>
                <h1>SUPER CLICKER</h1>
                <div>
                    <button type="button" onclick="gameInit(5000)">EASY<br><span>5 seconds</span></button>
                    <button type="button" onclick="gameInit(2500)">INTERMEDIATE<br><span>2.5 seconds</span></button>
                    <button type="button" onclick="gameInit(1000)">HARD<br><span>1 second</span></button>
                    <button class="impossible" type="button" onclick="gameInit(500)">IMPOSSIBLE<br><span>0.5 seconds</span></button>
                </div>
            </div>
        </div>
        <div class="countdown">
            <p id="countdown">5</p>
        </div>
        <p class="timer"><span class="timer-span">0.00</span> s</p>
        <div class="give-up"><button type="button" onclick="backToMenu()">GIVE UP</button></div>
        <div>
            <div onclick="circleUpdate()" class="circle" id="circle0"></div>
            <div onclick="circleUpdate()" class="circle" id="circle1"></div>
            <div onclick="circleUpdate()" class="circle" id="circle2"></div>
            <div onclick="circleUpdate()" class="circle" id="circle3"></div>
            <div onclick="circleUpdate()" class="circle" id="circle4"></div>
            <div onclick="circleUpdate()" class="circle" id="circle5"></div>
            <div onclick="circleUpdate()" class="circle" id="circle6"></div>
            <div onclick="circleUpdate()" class="circle" id="circle7"></div>
        </div>
        <div class="success">
            <div>
                <h2>Success!</h2>
                <p id="finalTime">Your final time was:</p>
                <button type="button" id="playAgain">Play Again</button>
                <button type="button" id="changeDifficulty">Change Difficulty</button>
            </div>
        </div>

    </main>

    <footer>

    </footer>

</body>

<script type="application/javascript" src="scripts/main.js"></script>

</html>