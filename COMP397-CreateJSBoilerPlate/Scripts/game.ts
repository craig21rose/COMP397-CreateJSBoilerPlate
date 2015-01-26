// CreateJS BoilerPlate for COMP397

// VARIABLES 
var canvas; // Reference to the HTML5 Canvas Element
var stage: createjs.Stage; // Reference to my Stage
var helloText: createjs.Text; // Holds my HelloText Text
var buttonBitmap: createjs.Bitmap; 

//FUNCTIONS 

function init()
{
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);//Paraent Object
    stage.enableMouseOver(20);

    createjs.Ticker.setFPS(60); //Set the frame rate to 60 fps
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();

}

//GAMELOOP
function gameLoop()
{
    stage.update();
}

function buttonClicked()
{
    helloText.text = "Goodbye";
}

function buttonOut()
{
    buttonBitmap.alpha = 1;
}

function buttonOver()
{
    buttonBitmap.alpha = 0.5;
}

function main()
{
    //this is where all the work happens.
    helloText = new createjs.Text("Hello World", "40px Consolas", "#000000");
    stage.addChild(helloText); //First Child Objectthat we add to the stage.

    buttonBitmap = new createjs.Bitmap("assests/images/butonn.png");
    buttonBitmap.x = 100;
    buttonBitmap.y = 100;
    buttonBitmap.scaleX = 0.25;
    buttonBitmap.scaleY = 0.25;

    buttonBitmap.addEventListener("click", buttonClicked);
    buttonBitmap.addEventListener("mouseout", buttonOut);
    buttonBitmap.addEventListener("mouseover", buttonOver);
    stage.addChild(buttonBitmap);

}