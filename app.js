let randyText = document.getElementById('randy-txt');

let helloButton = document.getElementById('say hi');
let mooButton = document.getElementById('moo');
let petButton = document.getElementById('pet');
let buttonClicked = "";
let lastClickedButton = "";

let helloCounter = 0;
let mooCounter = 0;
let petCounter = 0;
let annoyanceCounter = 0;


const responseList = [
    ["*Looks at you* - you have gained its attention", "*Stares*", "*Continues Stairing*", "Looks at you with dissapointment"], //Response to say hello
    ["*Confused Stairing*", "MOOOoooOOO", "MoooOOOOOOOOOOOOOUUUUnnngggh", "MOOOOOOOOOOOOOOOOOOOOO!!!!!!!!", "MOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!!!!!!!!!"], //Response to moo
    ["*Seems Supprised*", "*Appears to like it*", "MOOOOOOOOOO! *Seems happy*", "MOOooooooooooOOOOOOOOO *Snorts - probably has hand enough now*", "Seriously?"]  //Response to pet
];
function printResponse() {
    let randyMessage = "";
    let randyInnerHtml = randyText.innerHTML;
    const responseCounterType = getCorrectCounterType();
    const responseCounterValue = getCorrectCounterValue();

    if (annoyanceCounter > 2 && responseCounterValue > 3) {
        message = "Randy is annoyed!!! RUN!!!!!!!!";
        setRandyAngry();
    } else {
        message = responseList[responseCounterType][responseCounterValue];
    }
    message = randyInnerHtml;
}

function handleAnnoyance() {
    if(lastButtonClicked == buttonClicked) {
        annoyanceCounter++;
    }
}

function getCorrectCounterType() {
    switch(lastButtonClicked) {
        case "hello": 
            return 0;
        case "moo":
            return 1;
        case "pet":
            return 2;
    alert('cant find counter')
    }
}

function getCorrectCounterValue() {
    switch(lastButtonClicked) {
        case "hello": 
            return helloCounter;
        case "moo":
            return mooCounter;
        case "pet":
            return petCounter;
    alert('cant find counter')
    }
}

function setRandyAngry() {
    document.getElementByID("randy-img").src="randy-angry.png";
}


//Button agnostic functions
addEventListener("click", handleAnnoyance, printResponse);
//Button identification functions
helloButton.addEventListener("click", helloClicked);
mooButton.addEventListener("click", mooClicked);
helpetButtonloButton.addEventListener("click", petClicked);

//This makes me cringe
function helloClicked() {
    lastButtonClicked = buttonClicked;
    buttonClicked = 'hello';
    helloCounter++;
}
function mooClicked() {
    lastButtonClicked = buttonClicked;
    buttonClicked = 'moo';
    mooCounter++;
}
function petClicked() {
    lastButtonClicked = buttonClicked;
    buttonClicked = 'pet';
    petCounter++;
}



