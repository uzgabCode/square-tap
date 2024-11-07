// Set up the first randomizer for an orange square:
let btnsLength = document.querySelectorAll(".squares > div").length;
let randomizer = Math.floor(Math.random() * 25) + 1;
let userClick = 0;


// Here are the variables once the game starts:
let score = -1;
let lives = 3;
let time = 61;


// Now generate an orange button anywhere:
$(`.s${randomizer}`).css("background-color", "#f9a400");


// Call this function to start the game:
function updateScore() 
{
    $(`.s${randomizer}`).css("background-color", "#4a4a4a");
    randomizer = Math.floor(Math.random() * 25) + 1;
    $(`.s${randomizer}`).css("background-color", "#f9a400");

    setScore();
}


// Call this function to set the score to 0:
function setScore() 
{
    score += 1;
    $("#score").text("Score: " + score);
}


// Call this function to check lives:
function checkHearts() 
{
    switch (lives) {
        case 0:
            gameOver();
            break;

        case 1:
            oneHeart();
            break;

        case 2:
            twoHearts();
            break;

        case 3:
            threeHearts();
            break;
    }
}


// Call this function to start the timer:
function startTimer() {
    $("#time").text("TIME: " + (time - 1));
    time--;

    if (time === 0 && lives > 0) {
        stopGame();
    }
}


// Call this function if it is Game Over:
function gameOver() {
    $(".squares, #score, .time-lives, img").css("display", "none");
    $("#finalScore").css("display", "block");
    $(".gameOverBtns").css("display", "inline-block");
    $(".gameOverBtns > img").css("display", "inline-block")
    $("body").css("margin", 0);
    $("#finalScore").text("Game Over! TRY AGAIN?");
    centerItems()
}


// Call this function if user has one heart left:
function oneHeart()
{
    $("#heart1").css("opacity", 1);
    $("#heart2").css("opacity", 0);
    $("#heart3").css("opacity", 0);
}


// Call this function if user has two hearts left:
function twoHearts()
{
    $("#heart1").css("opacity", 1);
    $("#heart2").css("opacity", 1);
    $("#heart3").css("opacity", 0);
}


// Call this function if user has three hearts left:
function threeHearts()
{
    $("#heart1").css("opacity", 1);
    $("#heart2").css("opacity", 1);
    $("#heart3").css("opacity", 1);
}


// Call this function if the user runs out of time:
function stopGame()
{
    $(".squares, #score, .time-lives, img").css("display", "none");
    $("#finalScore").css("display", "block");

    setTimeout(function() {
        $(".secondMenu").css("display", "inline-block");
        $(".secondMenu > img").css("display", "inline-block")
    }, 2000)
    

    $("body").css("margin", 0);
    $("#finalScore").text("YOUR SCORE IS: " + score);
    centerItems();
}


// Call this function to center the items:
function centerItems() {
    $(".center-finalScore").css("display", "flex");
    $(".center-finalScore").css("height", "100vh");
}


// Check the condition before the game starts:
for (let a = 0; a < btnsLength; a++) 
{
    $(`.s${a + 1}`).click(function() 
    {
        userClick = a + 1;

        if (score < 0) 
        {
            if (userClick == randomizer) {
                updateScore()

                for (let i = 0; i < time + 1; i++)
                {
                    setTimeout(function() {
                        startTimer();
                    }, i * 1000)
                }
                
            }
        }

        else
        {
            if (userClick == randomizer) {
                updateScore();
            }

            else {
                lives--;
                checkHearts();
            }
        }
        
    })
}


// If user clicks the 'yes' button:
$("#yes").click(function() { window.location.href = "square-tap-gameplay.html" });

// If user click the 'no' button:
$("#no").click(function() { window.location.href = "square-tap-home-page.html" });

// If user clicks the 'retry' button:
$("#retry").click(function() { window.location.href = "square-tap-gameplay.html" });

// If user click the 'exit' button:
$("#exit").click(function() { window.location.href = "square-tap-home-page.html" });